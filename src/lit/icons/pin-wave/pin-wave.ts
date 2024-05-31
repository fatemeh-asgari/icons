import {html} from "lit";
import {TapIcon} from "../../icon";

export class PinWaveIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_1107)"><path d="M11.9997 4C13.9297 4 15.6797 4.78 16.9497 6.05L15.5397 7.46C14.6297 6.56 13.3797 6 11.9997 6C10.6197 6 9.36973 6.56 8.45973 7.46L7.04973 6.05C8.31973 4.78 10.0697 4 11.9997 4ZM19.7797 3.23L18.3697 4.64C16.7397 3.01 14.4897 2 12.0097 2C9.52973 2 7.26973 3.01 5.63973 4.63L4.21973 3.22C6.21973 1.23 8.96973 0 12.0097 0C15.0497 0 17.7897 1.23 19.7797 3.23ZM11.9997 11C13.9397 11 15.9997 12.45 15.9997 15.15C15.9997 16.09 15.4497 18.08 11.9997 21.32C8.54973 18.08 7.99973 16.09 7.99973 15.15C7.99973 12.45 10.0597 11 11.9997 11ZM11.9997 9C8.84973 9 5.99973 11.41 5.99973 15.15C5.99973 17.64 7.99973 20.59 11.9997 24C15.9997 20.59 17.9997 17.64 17.9997 15.15C17.9997 11.41 15.1497 9 11.9997 9ZM13.4997 15C13.4997 14.17 12.8297 13.5 11.9997 13.5C11.1697 13.5 10.4997 14.17 10.4997 15C10.4997 15.83 11.1697 16.5 11.9997 16.5C12.8297 16.5 13.4997 15.83 13.4997 15Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_1107"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
