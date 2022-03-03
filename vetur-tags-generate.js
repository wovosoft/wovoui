const { promisify } = require('util');
const fs = require('fs');
const glob = promisify(require('glob'));
const { parse } = require('vue-docgen-api');

const convertToKebabCase = str => (
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-')
);

const listComponents = async () => {
    return await glob('src/components/**/*.vue');
};

/**
 * Parses the component tags
 * @param {import('vue-docgen-api').ComponentDoc} component
 */
const parseTag = (component) => {
    const tag = {};
    if (component.props) {
        tag.attributes = component.props.map(prop => convertToKebabCase(prop.name));
    }
    tag.description = component.description || '';

    return tag;
};

/**
 * Parses the component tags
 * @param {String} componentTag
 * @param {import('vue-docgen-api').ComponentDoc} component
 */
const parseAttributes = (componentTag, component) => {
    const props = {};
    component.props.forEach((prop) => {
        const propName = convertToKebabCase(prop.name);
        // eslint-disable-next-line no-multi-assign
        const propDoc = props[`${componentTag}/${propName}`] = {};
        propDoc.description = prop.description || '';
        if (prop.type) {
            propDoc.type = prop.type.name;
        }
        if (prop.values) {
            propDoc.options = prop.values;
        }
    });

    return props;
};

const parseDocs = (components) => {
    const tags = {};
    let attributes = {};
    components.forEach((component) => {
        const componentName = component.displayName;
        const componentTag = convertToKebabCase(componentName);
        tags[componentTag] = parseTag(component);
        if (component.props) {
            attributes = { ...parseAttributes(componentTag, component), ...attributes };
        }
    });

    return [tags, attributes];
};

const gen = async () => {
    const components = await listComponents();
    const componentDocsPromises = components.map(c => parse(c));
    const docs = await Promise.all(componentDocsPromises);
    const [tags, attributes] = parseDocs(docs);

    fs.writeFileSync('dist/vetur-tags.json', JSON.stringify(tags, null, 2));
    fs.writeFileSync('dist/vetur-attributes.json', JSON.stringify(attributes, null, 2));
};

gen();