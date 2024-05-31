import {html} from "lit";
import {TapIcon} from "../../icon";

export class ClipboardClockIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1590)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C13.3 1 14.4 1.84 14.82 3H18C19.1 3 20 3.9 20 5V11H18V5H15V8H9V5H6V20H9V22H6C4.9 22 4 21.1 4 20V5C4 3.9 4.9 3 6 3H9.18C9.6 1.84 10.7 1 12 1ZM15 12C16.3261 12 17.5979 12.5268 18.5355 13.4645C19.4732 14.4021 20 15.6739 20 17C20 18.3261 19.4732 19.5979 18.5355 20.5355C17.5979 21.4732 16.3261 22 15 22C13.6739 22 12.4021 21.4732 11.4645 20.5355C10.5268 19.5979 10 18.3261 10 17C10 15.6739 10.5268 14.4021 11.4645 13.4645C12.4021 12.5268 13.6739 12 15 12ZM15 13.667C14.5623 13.667 14.1289 13.7532 13.7245 13.9207C13.3201 14.0882 12.9527 14.3337 12.6432 14.6432C12.3337 14.9527 12.0882 15.3201 11.9207 15.7245C11.7532 16.1289 11.667 16.5623 11.667 17C11.667 17.4377 11.7532 17.8711 11.9207 18.2755C12.0882 18.6799 12.3337 19.0473 12.6432 19.3568C12.9527 19.6663 13.3201 19.9118 13.7245 20.0793C14.1289 20.2468 14.5623 20.333 15 20.333C15.884 20.333 16.7317 19.9818 17.3568 19.3568C17.9818 18.7317 18.333 17.884 18.333 17C18.333 16.116 17.9818 15.2683 17.3568 14.6432C16.7317 14.0182 15.884 13.667 15 13.667ZM15.347 14.917V16.652H17.083V17.694H14.306V14.917H15.347ZM12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_1590"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
