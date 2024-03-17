import {ColorVariants} from "@/index";

export interface HasTag {
    tag?: keyof HTMLElementTagNameMap;
}

export interface HasColorVariant{
    variant?: ColorVariants;
}

export type ClassType = string | string[] | Record<string, boolean>;
export type TagType = keyof HTMLElementTagNameMap;

export * from "./Accordion";
export * from "./Alert";
export * from "./Breadcrumb";
export * from "./Button";
export * from "./Card";
export * from "./Carousel";
export * from "./Dropdown";
export * from "./Form";
export * from "./Indicators";
export * from "./Layout";
export * from "./ListGroup";
export * from "./Modal";
export * from "./Native";
export * from "./Navigation";
export * from "./Notification";
export * from "./Offcanvas";
export * from "./Tab";
export * from "./Table";
export * from "./Ui";









