#!/usr/bin/env node

/**
 * Script to generate IDE support files for all Vue components
 * Generates: vetur-tags.json, vetur-attributes.json, web-types.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const ROOT_DIR = path.join(__dirname, "..");
const EXCLUDE_DIRS = ["Internal", "Util"]; // Directories to skip

// Common prop definitions
const COMMON_PROPS = {
  tag: {
    type: "string",
    description: "HTML tag to use for the component",
    default: "div",
  },
  variant: {
    type: "string",
    description: "Color variant",
    enum: [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
  },
  size: {
    type: "string",
    description: "Size variant",
    enum: ["sm", "lg"],
  },
};

// Component-specific prop definitions
const COMPONENT_PROPS = {
  // Progress components
  Progress: {
    value: {
      type: "number",
      description: "Current progress value (0-100)",
      default: "0",
    },
    min: { type: "number", description: "Minimum value", default: "0" },
    max: { type: "number", description: "Maximum value", default: "100" },
    "show-value": {
      type: "boolean",
      description: "Show progress value as text",
      default: "true",
    },
    striped: {
      type: "boolean",
      description: "Apply striped styling",
      default: "false",
    },
    animated: {
      type: "boolean",
      description: "Animate striped progress bar",
      default: "false",
    },
    "bar-tag": {
      type: "string",
      description: "HTML tag for progress bar container",
      default: "div",
    },
    height: {
      type: "string | number",
      description: "Height of progress container",
    },
  },
  ProgressBar: {
    value: {
      type: "number",
      description: "Current progress value (0-100)",
      default: "0",
    },
    min: { type: "number", description: "Minimum value", default: "0" },
    max: { type: "number", description: "Maximum value", default: "100" },
    "show-value": {
      type: "boolean",
      description: "Show progress value as text",
      default: "true",
    },
    striped: {
      type: "boolean",
      description: "Apply striped styling",
      default: "false",
    },
    animated: {
      type: "boolean",
      description: "Animate striped progress bar",
      default: "false",
    },
  },
  Spinner: {
    grow: {
      type: "boolean",
      description: "Use grow animation instead of border",
      default: "false",
    },
  },

  // Button components
  Button: {
    href: { type: "string", description: "Link URL when used as anchor" },
    type: {
      type: "string",
      description: "Button type",
      enum: ["button", "submit", "reset"],
      default: "button",
    },
    outline: {
      type: "boolean",
      description: "Use outline style",
      default: "false",
    },
    block: {
      type: "boolean",
      description: "Full width button",
      default: "false",
    },
    pill: {
      type: "boolean",
      description: "Pill shaped button",
      default: "false",
    },
    squared: {
      type: "boolean",
      description: "Square corners",
      default: "false",
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
    pressed: {
      type: "boolean",
      description: "Pressed state",
      default: "false",
    },
    "no-wrap": {
      type: "boolean",
      description: "Prevent text wrapping",
      default: "false",
    },
    link: {
      type: "boolean",
      description: "Link style button",
      default: "false",
    },
    active: { type: "boolean", description: "Active state", default: "false" },
    "active-class": {
      type: "string",
      description: "CSS class for active state",
      default: "active",
    },
    "manage-active-state": {
      type: "boolean",
      description: "Manage active state automatically",
      default: "false",
    },
    "no-style": {
      type: "boolean",
      description: "Remove default styling",
      default: "false",
    },
    content: { type: "string", description: "Button content" },
  },
  ButtonClose: {
    white: { type: "boolean", description: "White variant", default: "false" },
    "aria-label": {
      type: "string",
      description: "Accessibility label",
      default: "Close",
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
  },
  ButtonGroup: {
    "aria-label": { type: "string", description: "Accessibility label" },
    vertical: {
      type: "boolean",
      description: "Vertical layout",
      default: "false",
    },
    justified: {
      type: "boolean",
      description: "Justified layout",
      default: "false",
    },
    outline: {
      type: "boolean",
      description: "Outline style for all buttons",
      default: "false",
    },
    role: { type: "string", description: "ARIA role", default: "group" },
  },
  ButtonToolbar: {
    role: { type: "string", description: "ARIA role", default: "toolbar" },
    justified: {
      type: "boolean",
      description: "Justified layout",
      default: "false",
    },
  },

  // Modal components
  Modal: {
    show: { type: "boolean", description: "Show/hide modal", default: "false" },
    backdrop: {
      type: "boolean | string",
      description: "Backdrop behavior",
      default: "true",
    },
    keyboard: {
      type: "boolean",
      description: "Close on escape key",
      default: "true",
    },
    focus: {
      type: "boolean",
      description: "Focus management",
      default: "true",
    },
    size: {
      type: "string",
      description: "Modal size",
      enum: ["sm", "lg", "xl"],
    },
    centered: {
      type: "boolean",
      description: "Center modal vertically",
      default: "false",
    },
    scrollable: {
      type: "boolean",
      description: "Scrollable modal body",
      default: "false",
    },
    fullscreen: {
      type: "boolean | string",
      description: "Fullscreen modal",
      default: "false",
    },
    "no-fade": {
      type: "boolean",
      description: "Disable fade animation",
      default: "false",
    },
    "no-close-on-backdrop": {
      type: "boolean",
      description: "Prevent close on backdrop click",
      default: "false",
    },
    "no-close-on-esc": {
      type: "boolean",
      description: "Prevent close on escape",
      default: "false",
    },
    "no-enforce-focus": {
      type: "boolean",
      description: "Disable focus enforcement",
      default: "false",
    },
  },

  // Alert components
  Alert: {
    dismissible: {
      type: "boolean",
      description: "Show dismiss button",
      default: "false",
    },
    show: { type: "boolean", description: "Show/hide alert", default: "true" },
    fade: { type: "boolean", description: "Fade animation", default: "true" },
  },

  // Form components
  Input: {
    type: { type: "string", description: "Input type", default: "text" },
    value: { type: "string | number", description: "Input value" },
    placeholder: { type: "string", description: "Placeholder text" },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
    readonly: {
      type: "boolean",
      description: "Readonly state",
      default: "false",
    },
    required: {
      type: "boolean",
      description: "Required field",
      default: "false",
    },
    "is-valid": { type: "boolean", description: "Valid state" },
    "is-invalid": { type: "boolean", description: "Invalid state" },
  },
  Select: {
    options: { type: "array", description: "Select options" },
    value: {
      type: "string | number | array",
      description: "Selected value(s)",
    },
    multiple: {
      type: "boolean",
      description: "Multiple selection",
      default: "false",
    },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
    required: {
      type: "boolean",
      description: "Required field",
      default: "false",
    },
  },
  Checkbox: {
    checked: {
      type: "boolean",
      description: "Checked state",
      default: "false",
    },
    value: { type: "string | number | boolean", description: "Checkbox value" },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
    required: {
      type: "boolean",
      description: "Required field",
      default: "false",
    },
    indeterminate: {
      type: "boolean",
      description: "Indeterminate state",
      default: "false",
    },
  },
  Radio: {
    checked: {
      type: "boolean",
      description: "Checked state",
      default: "false",
    },
    value: { type: "string | number | boolean", description: "Radio value" },
    name: { type: "string", description: "Radio group name" },
    disabled: {
      type: "boolean",
      description: "Disabled state",
      default: "false",
    },
    required: {
      type: "boolean",
      description: "Required field",
      default: "false",
    },
  },

  // Navigation components
  Nav: {
    pills: { type: "boolean", description: "Pills style", default: "false" },
    tabs: { type: "boolean", description: "Tabs style", default: "false" },
    vertical: {
      type: "boolean",
      description: "Vertical layout",
      default: "false",
    },
    justified: {
      type: "boolean",
      description: "Justified layout",
      default: "false",
    },
    fill: {
      type: "boolean",
      description: "Fill available space",
      default: "false",
    },
  },
  Navbar: {
    expand: {
      type: "string | boolean",
      description: "Responsive breakpoint",
      enum: ["sm", "md", "lg", "xl", "xxl"],
    },
    fixed: {
      type: "string",
      description: "Fixed position",
      enum: ["top", "bottom"],
    },
    sticky: {
      type: "string",
      description: "Sticky position",
      enum: ["top", "bottom"],
    },
    "bg-variant": { type: "string", description: "Background variant" },
    "text-variant": { type: "string", description: "Text variant" },
  },

  // Table components
  Table: {
    striped: { type: "boolean", description: "Striped rows", default: "false" },
    bordered: {
      type: "boolean",
      description: "Bordered table",
      default: "false",
    },
    borderless: {
      type: "boolean",
      description: "Borderless table",
      default: "false",
    },
    hover: { type: "boolean", description: "Hover effect", default: "false" },
    small: { type: "boolean", description: "Compact table", default: "false" },
    responsive: {
      type: "boolean | string",
      description: "Responsive table",
      default: "false",
    },
    "caption-top": {
      type: "boolean",
      description: "Caption at top",
      default: "false",
    },
  },

  // Card components
  Card: {
    "bg-variant": { type: "string", description: "Background variant" },
    "text-variant": { type: "string", description: "Text variant" },
    "border-variant": { type: "string", description: "Border variant" },
    "no-body": {
      type: "boolean",
      description: "No card body wrapper",
      default: "false",
    },
  },

  // Badge component
  Badge: {
    pill: {
      type: "boolean",
      description: "Pill shaped badge",
      default: "false",
    },
    "text-indicator": {
      type: "boolean",
      description: "Text indicator style",
      default: "false",
    },
  },
};

// Component descriptions
const COMPONENT_DESCRIPTIONS = {
  // Indicators
  Progress:
    "Progress component for displaying progress bars with customizable styling and behavior.",
  ProgressBar:
    "ProgressBar component for displaying individual progress bar elements.",
  Spinner:
    "Spinner component for displaying loading indicators with various styles and sizes.",

  // Buttons
  Button: "Button component with various styles and states.",
  ButtonClose: "Close button component typically used in modals and alerts.",
  ButtonGroup: "Button group component for grouping related buttons.",
  ButtonToolbar: "Button toolbar component for organizing button groups.",

  // Modals
  Modal: "Modal dialog component for displaying content in an overlay.",
  ModalBody: "Modal body component for main modal content.",
  ModalHeader: "Modal header component with title and close button.",
  ModalFooter: "Modal footer component for action buttons.",
  ModalTitle: "Modal title component for modal headers.",
  ModalDialog: "Modal dialog wrapper component.",

  // Alerts
  Alert: "Alert component for displaying contextual feedback messages.",
  AlertHeading: "Alert heading component for alert titles.",
  AlertLink: "Alert link component with proper styling.",

  // Forms
  Input: "Input component for text input fields.",
  Select: "Select component for dropdown selections.",
  Checkbox: "Checkbox component for boolean selections.",
  Radio: "Radio button component for single selections.",
  Textarea: "Textarea component for multi-line text input.",
  FormGroup: "Form group component for organizing form elements.",
  FormLabel: "Form label component for input labels.",
  FormControl: "Form control wrapper component.",

  // Navigation
  Nav: "Navigation component for creating navigation menus.",
  NavItem: "Navigation item component.",
  NavLink: "Navigation link component.",
  Navbar: "Navbar component for site navigation.",
  NavbarBrand: "Navbar brand component for logos and titles.",
  NavbarNav: "Navbar navigation component.",
  NavbarToggler: "Navbar toggle button for mobile navigation.",
  Pagination: "Pagination component for page navigation.",
  PageItem: "Pagination item component.",
  PageLink: "Pagination link component.",

  // Tables
  Table: "Table component for displaying tabular data.",
  DataTable: "Advanced data table component with sorting and filtering.",
  THead: "Table head component.",
  TBody: "Table body component.",
  TFoot: "Table footer component.",
  Tr: "Table row component.",
  Th: "Table header cell component.",
  Td: "Table data cell component.",

  // Cards
  Card: "Card component for content containers.",
  CardBody: "Card body component for main card content.",
  CardHeader: "Card header component.",
  CardFooter: "Card footer component.",
  CardTitle: "Card title component.",
  CardSubTitle: "Card subtitle component.",
  CardText: "Card text component.",
  CardImg: "Card image component.",
  CardLink: "Card link component.",
  CardGroup: "Card group component for organizing cards.",

  // UI Components
  Badge: "Badge component for labels and indicators.",
  Icon: "Icon component for displaying icons.",
  Aspect: "Aspect ratio component for responsive media.",
  Placeholder: "Placeholder component for loading states.",
  Figure: "Figure component for images with captions.",
  Chart: "Chart component for data visualization.",
  Vr: "Vertical rule component for visual separation.",

  // Dropdowns
  Dropdown: "Dropdown component for contextual menus.",
  DropdownButton: "Dropdown button component.",
  DropdownMenu: "Dropdown menu component.",
  DropdownItem: "Dropdown item component.",
  DropdownHeader: "Dropdown header component.",
  DropdownDivider: "Dropdown divider component.",

  // Accordions
  Accordion: "Accordion component for collapsible content.",
  AccordionItem: "Accordion item component.",
  AccordionHeader: "Accordion header component.",
  AccordionBody: "Accordion body component.",
  Collapse: "Collapse component for show/hide functionality.",

  // Carousels
  Carousel: "Carousel component for image/content sliders.",
  CarouselItem: "Carousel item component.",
  CarouselInner: "Carousel inner wrapper component.",
  CarouselControl: "Carousel control button component.",
  CarouselIndicators: "Carousel indicators component.",
  CarouselIndicatorButton: "Carousel indicator button component.",
  CarouselCaption: "Carousel caption component.",

  // Notifications
  Toast: "Toast component for temporary notifications.",
  ToastBody: "Toast body component.",
  ToastContainer: "Toast container component.",
  Tooltip: "Tooltip component for contextual information.",
  Popover: "Popover component for rich contextual overlays.",

  // Offcanvas
  Offcanvas: "Offcanvas component for slide-out panels.",
  OffcanvasHeader: "Offcanvas header component.",
  OffcanvasBody: "Offcanvas body component.",
  OffcanvasTitle: "Offcanvas title component.",

  // Tabs
  Tabs: "Tabs component for tabbed content.",
  Tab: "Tab component for individual tabs.",
  TabContent: "Tab content component.",

  // List Groups
  ListGroup: "List group component for lists of content.",
  ListGroupItem: "List group item component.",

  // Breadcrumbs
  Breadcrumb: "Breadcrumb component for navigation hierarchy.",
  BreadcrumbItem: "Breadcrumb item component.",

  // Layout
  Container: "Container component for responsive layouts.",
  Row: "Row component for grid layouts.",
  Col: "Column component for grid layouts.",
  Column: "Column component alias.",
  Layout: "Layout component for page structure.",
  Flex: "Flex component for flexbox layouts.",
  FlexItem: "Flex item component.",

  // Native
  NativeCollapse: "Native HTML collapse component.",
  NativeDialog: "Native HTML dialog component.",
  NativeProgress: "Native HTML progress component.",
};

/**
 * Get all component directories
 */
function getComponentDirectories() {
  return fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !EXCLUDE_DIRS.includes(name));
}

/**
 * Get Vue components in a directory
 */
function getVueComponents(dirPath) {
  const files = fs.readdirSync(dirPath);
  return files
    .filter((file) => file.endsWith(".vue"))
    .map((file) => file.replace(".vue", ""));
}

/**
 * Get all components from all directories
 */
function getAllComponents() {
  const componentDirs = getComponentDirectories();
  const allComponents = {};

  componentDirs.forEach((dir) => {
    const dirPath = path.join(COMPONENTS_DIR, dir);
    const components = getVueComponents(dirPath);
    if (components.length > 0) {
      allComponents[dir] = components;
    }
  });

  return allComponents;
}

/**
 * Get props for a component
 */
function getComponentProps(componentName) {
  const props = { ...COMPONENT_PROPS[componentName] || {} };

  // Add common props
  props.tag = COMMON_PROPS.tag;

  // Add variant if not already defined
  if (
    !props.variant && !["ButtonClose", "ButtonToolbar"].includes(componentName)
  ) {
    props.variant = COMMON_PROPS.variant;
  }

  // Add size if not already defined
  if (
    !props.size &&
    ["Button", "ButtonGroup", "Spinner", "Modal"].includes(componentName)
  ) {
    props.size = COMMON_PROPS.size;
  }

  return props;
}

/**
 * Convert camelCase to kebab-case
 */
function camelToKebab(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Generate vetur-tags.json
 */
function generateVeturTags(allComponents) {
  const tags = {};

  Object.values(allComponents).flat().forEach((component) => {
    const props = getComponentProps(component);
    const description = COMPONENT_DESCRIPTIONS[component] ||
      `${component} component.`;

    tags[component] = {
      description,
      attributes: Object.keys(props).map((prop) => camelToKebab(prop)),
    };
  });

  return tags;
}

/**
 * Generate vetur-attributes.json
 */
function generateVeturAttributes(allComponents) {
  const attributes = {};

  Object.values(allComponents).flat().forEach((component) => {
    const props = getComponentProps(component);

    Object.entries(props).forEach(([propName, propDef]) => {
      const kebabProp = camelToKebab(propName);
      const key = `${component}/${kebabProp}`;

      let type = propDef.type;
      if (propDef.enum) {
        type = propDef.enum.join("|");
      }

      attributes[key] = {
        type,
        description: propDef.description,
      };
    });
  });

  return attributes;
}

/**
 * Generate web-types.json
 */
function generateWebTypes(allComponents) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(ROOT_DIR, "package.json"), "utf8"),
  );

  const tags = Object.values(allComponents).flat().map((component) => {
    const props = getComponentProps(component);
    const description = COMPONENT_DESCRIPTIONS[component] ||
      `${component} component.`;

    const attributes = Object.entries(props).map(([propName, propDef]) => {
      const kebabProp = camelToKebab(propName);

      const attribute = {
        name: kebabProp,
        description: propDef.description,
        type: propDef.type,
        required: false,
      };

      if (propDef.default !== undefined) {
        attribute.default = propDef.default;
      }

      if (propDef.enum) {
        attribute.enum = propDef.enum;
      }

      return attribute;
    });

    return {
      name: component,
      description,
      "doc-url":
        `https://github.com/wovosoft/wovoui#${component.toLowerCase()}`,
      source: {
        module: "@wovosoft/wovoui",
        symbol: component,
      },
      attributes,
      slots: [
        {
          name: "default",
          description: `Default slot for ${component} content`,
        },
      ],
    };
  });

  return {
    "$schema":
      "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
    framework: "vue",
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description ||
      "Vue 3 UI component library with Bootstrap styling",
    "default-icon": "icons/vue.svg",
    contributions: {
      html: {
        "types-syntax": "typescript",
        "description-markup": "markdown",
        tags,
      },
    },
  };
}

/**
 * Main execution
 */
function main() {
  console.log("🚀 Generating IDE support files for all components...\n");

  const allComponents = getAllComponents();
  const totalComponents = Object.values(allComponents).flat().length;

  console.log(
    `📊 Found ${totalComponents} components across ${
      Object.keys(allComponents).length
    } directories\n`,
  );

  // Generate vetur-tags.json
  console.log("📝 Generating vetur-tags.json...");
  const veturTags = generateVeturTags(allComponents);
  fs.writeFileSync(
    path.join(ROOT_DIR, "vetur-tags.json"),
    JSON.stringify(veturTags, null, 2),
  );
  console.log(
    `✅ Generated vetur-tags.json with ${
      Object.keys(veturTags).length
    } components`,
  );

  // Generate vetur-attributes.json
  console.log("📝 Generating vetur-attributes.json...");
  const veturAttributes = generateVeturAttributes(allComponents);
  fs.writeFileSync(
    path.join(ROOT_DIR, "vetur-attributes.json"),
    JSON.stringify(veturAttributes, null, 2),
  );
  console.log(
    `✅ Generated vetur-attributes.json with ${
      Object.keys(veturAttributes).length
    } attributes`,
  );

  // Generate web-types.json
  console.log("📝 Generating web-types.json...");
  const webTypes = generateWebTypes(allComponents);
  fs.writeFileSync(
    path.join(ROOT_DIR, "web-types.json"),
    JSON.stringify(webTypes, null, 2),
  );
  console.log(
    `✅ Generated web-types.json with ${webTypes.contributions.html.tags.length} components`,
  );

  // Generate .idea/webTypes.json (copy of web-types.json for PhpStorm)
  const ideaDir = path.join(ROOT_DIR, ".idea");
  if (!fs.existsSync(ideaDir)) {
    fs.mkdirSync(ideaDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(ideaDir, "webTypes.json"),
    JSON.stringify(webTypes, null, 2),
  );
  console.log("✅ Generated .idea/webTypes.json for PhpStorm");

  console.log("\n🎉 All IDE support files generated successfully!");
  console.log("\n📋 Generated files:");
  console.log("   • vetur-tags.json - Vetur component definitions");
  console.log("   • vetur-attributes.json - Vetur attribute definitions");
  console.log("   • web-types.json - Modern IDE support (PhpStorm/WebStorm)");
  console.log("   • .idea/webTypes.json - PhpStorm-specific configuration");

  console.log("\n💡 Features enabled:");
  console.log("   • Component name autocomplete");
  console.log("   • Prop suggestions with types");
  console.log("   • Documentation on hover");
  console.log("   • Type validation");
  console.log("   • Enum value suggestions");
}

// Run the script
main();
