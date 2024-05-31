import {html} from "lit";
import {TapIcon} from "../../icon";

export class PinIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 22V24H11V22H13ZM12 2C16.4183 2 20 5.58172 20 10C20 12.8805 18.4102 15.4172 15.8722 16.983L15.3494 17.2956C15.1772 17.4028 15.0147 17.512 14.8618 17.623C14.0665 18.2005 13.5653 18.7933 13.2714 19.3836L13.2417 19.4487L13.1747 19.6211L12.9467 20.2685L12.8814 20.4345C12.8501 20.5082 12.8212 20.5658 12.7962 20.5978L12.7491 20.6535L12.6692 20.7401C12.6218 20.7855 12.5749 20.8169 12.5041 20.846L12.4245 20.8748L12.2506 20.9244L12 20.9877L11.6551 20.899C11.4941 20.8534 11.4184 20.8186 11.3473 20.7552L11.2936 20.7016L11.2048 20.5991C11.1881 20.5778 11.1697 20.5451 11.15 20.5038L11.0873 20.3569L11.0538 20.2693L10.8242 19.6197L10.7893 19.5269L10.7265 19.3808C10.4294 18.7872 9.92232 18.1908 9.11754 17.6097C8.96643 17.5006 8.80615 17.3933 8.63641 17.2879L8.11799 16.9782C5.58274 15.4145 4 12.8805 4 10C4 5.58172 7.58172 2 12 2ZM12 4C8.68629 4 6 6.68629 6 10C6 12.1338 7.18145 14.0381 9.13564 15.256L9.69368 15.5902C9.90187 15.7196 10.1 15.8523 10.2883 15.9883C10.8976 16.4282 11.3936 16.8929 11.7891 17.3749L11.999 17.646L12.2043 17.3809C12.4713 17.0542 12.7845 16.7356 13.1478 16.4273L13.4297 16.198L13.6866 16.0047C13.8776 15.866 14.0788 15.7307 14.2904 15.599L14.8543 15.2609C16.8122 14.0404 18 12.1325 18 10C18 6.68629 15.3137 4 12 4ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9Z" fill="currentColor"/></svg>`);
  }
}
