import {html} from "lit";
import {TapIcon} from "../../icon";

export class FlagIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_553)"><path d="M7 14V20C7 20.2833 6.90417 20.5208 6.7125 20.7125C6.52083 20.9042 6.28333 21 6 21C5.71667 21 5.47917 20.9042 5.2875 20.7125C5.09583 20.5208 5 20.2833 5 20V5C5 4.71667 5.09583 4.47917 5.2875 4.2875C5.47917 4.09583 5.71667 4 6 4H13.175C13.4083 4 13.6167 4.075 13.8 4.225C13.9833 4.375 14.1 4.56667 14.15 4.8L14.4 6H19C19.2833 6 19.5208 6.09583 19.7125 6.2875C19.9042 6.47917 20 6.71667 20 7V15C20 15.2833 19.9042 15.5208 19.7125 15.7125C19.5208 15.9042 19.2833 16 19 16H13.825C13.5917 16 13.3833 15.925 13.2 15.775C13.0167 15.625 12.9 15.4333 12.85 15.2L12.6 14H7ZM14.65 14H18V8H13.575C13.3417 8 13.1333 7.925 12.95 7.775C12.7667 7.625 12.65 7.43333 12.6 7.2L12.35 6H7V12H13.425C13.6583 12 13.8667 12.075 14.05 12.225C14.2333 12.375 14.35 12.5667 14.4 12.8L14.65 14Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_553"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
