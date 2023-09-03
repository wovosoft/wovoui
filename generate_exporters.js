import {readFileSync, writeFileSync} from "fs";
import {resolve, dirname} from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
// @ts-ignore
const theList = {
    "index": 'src/index.ts',
    "composables/index": 'src/composables/index.ts',
    "directives/index": 'src/directives/index.ts',
    "shared/index": 'src/shared/index.ts',

    /**LIST OF COMPONENTS**/
    "components/index": 'src/components/index.ts',
    "components/Accordion/index": 'src/components/Accordion/index.ts',
    "components/Alert/index": 'src/components/Alert/index.ts',
    "components/Breadcrumb/index": 'src/components/Breadcrumb/index.ts',
    "components/Button/index": 'src/components/Button/index.ts',
    "components/Card/index": 'src/components/Card/index.ts',
    "components/Carousel/index": 'src/components/Carousel/index.ts',
    "components/Dropdown/index": 'src/components/Dropdown/index.ts',
    "components/Form/index": 'src/components/Form/index.ts',
    "components/Indicators/index": 'src/components/Indicators/index.ts',
    "components/Layout/index": 'src/components/Layout/index.ts',
    "components/ListGroup/index": 'src/components/ListGroup/index.ts',
    "components/Modal/index": 'src/components/Modal/index.ts',
    "components/Native/index": 'src/components/Native/index.ts',
    "components/Navigation/index": 'src/components/Navigation/index.ts',
    "components/Notification/index": 'src/components/Notification/index.ts',
    "components/Offcanvas/index": 'src/components/Offcanvas/index.ts',
    "components/Tab/index": 'src/components/Tab/index.ts',
    "components/Table/index": 'src/components/Table/index.ts',
    "components/Ui/index": 'src/components/Ui/index.ts',
}

function generateEntryPoints() {
    let content = "";

    Object.keys(theList).forEach((key) => {
        content += `\t"${key}": resolve(__dirname, "${theList[key]}"),\n`;
    });

    content = `import {resolve} from "path";

export default {\n${content}}`
    return content;
}


function generateJsonExports() {
    let content = {
        "./dist/style.css": "./dist/style.css",
        "./types": "./dist/types/index.d.ts"
    };

    Object.keys(theList).forEach((key) => {
        let first_key;
        if (key === 'index') {
            first_key = ".";
        } else {
            first_key = "./" + key.replace("/index", "");
        }
        content[first_key] = {
            "import": `./dist/${key}.js`,
            "require": `./dist/${key}.cjs`,
            "types": `./dist/types/${key}.d.ts`,
        };
    });

    let packageContent = JSON.parse(readFileSync(resolve(__dirname, 'package.json')));
    packageContent['exports'] = content;

    return JSON.stringify(packageContent, null, 4);
}

try {
    writeFileSync(resolve(__dirname, 'entry_points.ts'), generateEntryPoints());
    console.log("Entry Points written successfully at entry_points.ts");
    writeFileSync(resolve(__dirname, 'package.json'), generateJsonExports());
    console.log("package.json updated");
} catch (err) {
    console.error(err);
}

generateJsonExports();

