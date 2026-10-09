export const SITE_TITLE = 'CLF-C02 Study Notes';
export const SITE_ORIGIN = 'https://admijw.github.io';
export const BASE_PATH = '/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes/';
export const REPOSITORY = 'https://github.com/AdmiJW/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes';
export const SOURCE_BRANCH = 'master';
export const NOTE_PATTERN = '[0-9][0-9] - *.md';
export const INTRODUCTION_SOURCE = '00 - Course Introduction.md';

/** @param {string} path */
export function withBase(path) { return `${BASE_PATH}${path.replace(/^\/+/, '')}`; }
