import {html} from "lit";
import {TapIcon} from "../../icon";

export class SendChatFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_847)"><path d="M17.6628 2.31436L3.66279 9.31637H3.65279C3.15619 9.56625 2.73877 9.94924 2.4471 10.4226C2.15543 10.896 2.00098 11.4411 2.00098 11.9971C2.00098 12.5532 2.15543 13.0983 2.4471 13.5717C2.73877 14.045 3.15619 14.428 3.65279 14.6779L17.6528 21.6799C18.0733 21.886 18.5346 21.9953 19.0028 22C19.5027 21.9999 19.9947 21.8748 20.434 21.6361C20.8733 21.3974 21.246 21.0527 21.5182 20.6333C21.7905 20.2139 21.9536 19.7331 21.9928 19.2346C22.032 18.7361 21.9461 18.2356 21.7428 17.7788L19.6065 12.9974H12.0028C11.4505 12.9974 11.0028 12.5496 11.0028 11.9971C11.0028 11.4447 11.4505 10.9968 12.0028 10.9968H19.6065L21.7428 6.21548C21.9926 5.65097 22.0623 5.02313 21.9423 4.41757C21.8223 3.81201 21.5186 3.25819 21.0725 2.83162C20.6263 2.40506 20.0595 2.1265 19.4494 2.03393C18.8392 1.94136 18.2153 2.03929 17.6628 2.31436Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_847"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
