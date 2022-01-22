const path = require('path');
const fs = require('fs');
const camelCase = require("lodash/camelCase");
const upperFirst = require("lodash/upperFirst");

const directory = path.resolve(__dirname + "./../node_modules/bootstrap-icons/icons");

const iconWritePath = path.resolve(__dirname + "/components/icons/");
let count = 0;

let iconImports = [];
let iconExports = [];

const baseIcon = fs.readFileSync(path.resolve(__dirname + "/shared/BaseIcon.vue")).toString();
// const baseIcon = fs.readFileSync(path.resolve(__dirname + "/shared/BaseIconSvgLoader.vue")).toString();
// const baseIcon = fs.readFileSync(path.resolve(__dirname + "/shared/BaseIconVHtml.vue")).toString();

fs.readdirSync(directory)
    .filter(i => i.endsWith(".svg"))
    .forEach(icon => {
        //Generate Raw Icons Format
        generateAndWriteIcon(icon, iconExports, iconImports);

        //Generate Icons v-html Format
        // generateIconsVHtml(icon, iconExports, iconImports);

        //Generate Icons using https://www.npmjs.com/package/vite-svg-loader
        // generateAndWriteIconWithSvgLoader(icon,iconExports,iconImports);
    });

// Export Icons

console.info(count + " icons generated successfully.");

fs.writeFileSync(
    path.resolve(__dirname + '/icons.js'),
    iconImports.join("\n") + '\nexport {\n\t' + iconExports.join(",\n\t") + '\n}'
);
console.info(count + " icons exported in src/icons.js");


// Helpers


function isNumber(val) {
    return !isNaN(val);
}

function generateAndWriteIcon(icon, iconExports, iconImports) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));
    const iconContent = fs.readFileSync(path.resolve(directory + "/" + icon)).toString();


    let theIcon = baseIcon
        .replace("<!--CONTENT-->", iconContent)
        .replace("BASE_ICON_NAME", iconName)
        .replace('fill="currentColor"', ':fill="fill"')
        .replace("ORIGINAL_ICON_CLASS", (icon.replace(".svg", "")))
        .replace('class="bi bi-' + (icon.replace(".svg", "")) + '"', ':class="classes"')
        .replace('width="16"', ':width="sizeWidth"')
        .replace('height="16"', ':height="sizeHeight"');

    iconExports.push((isNumber(iconName) ? "_" : "") + iconName);
    iconImports.push('import ' + (isNumber(iconName) ? "_" : "") + iconName + ' from "./components/icons/' + iconName + '.vue";');

    try {
        fs.writeFileSync([iconWritePath, iconName].join("/") + ".vue", theIcon);
        count++;
    } catch (err) {
        console.error(err)
    }
}

function generateIconsVHtml(icon, iconExports, iconImports) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));
    const iconContent = fs.readFileSync(path.resolve(directory + "/" + icon)).toString();


    let theIcon = baseIcon
        .replace("ICON_CONTENT", iconContent)
        .replace("BASE_ICON_NAME", iconName);

    iconExports.push((isNumber(iconName) ? "_" : "") + iconName);
    iconImports.push('import ' + (isNumber(iconName) ? "_" : "") + iconName + ' from "./components/icons/' + iconName + '.vue";');

    try {
        fs.writeFileSync([iconWritePath, iconName].join("/") + ".vue", theIcon);
        count++;
    } catch (err) {
        console.error(err)
    }
}

function generateAndWriteIconWithSvgLoader(icon, iconExports, iconImports) {
    const iconName = upperFirst(camelCase(icon.replace(".svg", "")));

    let theIcon = baseIcon
        .replace("<!--CONTENT-->", '<SvgIcon/>')
        .replace("//IMPORTS", 'import SvgIcon from "bootstrap-icons/icons/' + icon + '?raw";');

    iconExports.push((isNumber(iconName) ? "_" : "") + iconName);
    iconImports.push('import ' + (isNumber(iconName) ? "_" : "") + iconName + ' from "./components/icons/' + iconName + '.vue";');

    try {
        fs.writeFileSync([iconWritePath, iconName].join("/") + ".vue", theIcon);
        count++;
    } catch (err) {
        console.error(err)
    }
}