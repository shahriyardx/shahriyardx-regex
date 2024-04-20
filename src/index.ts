import { DOMAIN_REGEX, EMAIL_REGEX, URL_REGEX } from "./regex"

/**
 * Check wheather the text is a valid email or not
 * @param text text to test
 * @returns true or false depending on the text
 */
export function isEmail(text: string): boolean {
	return EMAIL_REGEX.test(text)
}

/**
 * Check wheather the text is a valid URL or not
 * @param text text to test
 * @returns true or false depending on the text
 */
export function isURL(text: string): boolean {
	return URL_REGEX.test(text)
}

/**
 * Check wheather the text is a valid domainor not
 * @param text text to test
 * @returns true or false depending on the text
 */
export function isDomain(text: string): boolean {
	return DOMAIN_REGEX.test(text)
}
