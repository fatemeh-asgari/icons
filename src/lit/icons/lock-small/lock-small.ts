import {html} from "lit";
import {TapIcon} from "../../icon";

export class LockSmallIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1312)"><path d="M7.5 19.5C7.0875 19.5 6.73438 19.3601 6.44063 19.0804C6.14687 18.8006 6 18.4643 6 18.0714V10.9286C6 10.5357 6.14687 10.1994 6.44063 9.91964C6.73438 9.63988 7.0875 9.5 7.5 9.5H8.25V8.07143C8.25 7.08333 8.61563 6.24107 9.34688 5.54464C10.0781 4.84821 10.9625 4.5 12 4.5C13.0375 4.5 13.9219 4.84821 14.6531 5.54464C15.3844 6.24107 15.75 7.08333 15.75 8.07143V9.5H16.5C16.9125 9.5 17.2656 9.63988 17.5594 9.91964C17.8531 10.1994 18 10.5357 18 10.9286V18.0714C18 18.4643 17.8531 18.8006 17.5594 19.0804C17.2656 19.3601 16.9125 19.5 16.5 19.5H7.5ZM7.5 18.0714H16.5V10.9286H7.5V18.0714ZM12 15.9286C12.4125 15.9286 12.7656 15.7887 13.0594 15.5089C13.3531 15.2292 13.5 14.8929 13.5 14.5C13.5 14.1071 13.3531 13.7708 13.0594 13.4911C12.7656 13.2113 12.4125 13.0714 12 13.0714C11.5875 13.0714 11.2344 13.2113 10.9406 13.4911C10.6469 13.7708 10.5 14.1071 10.5 14.5C10.5 14.8929 10.6469 15.2292 10.9406 15.5089C11.2344 15.7887 11.5875 15.9286 12 15.9286ZM9.75 9.5H14.25V8.07143C14.25 7.47619 14.0312 6.97024 13.5938 6.55357C13.1563 6.1369 12.625 5.92857 12 5.92857C11.375 5.92857 10.8438 6.1369 10.4062 6.55357C9.96875 6.97024 9.75 7.47619 9.75 8.07143V9.5Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_1312"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
