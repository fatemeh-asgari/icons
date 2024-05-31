import {html} from "lit";
import {TapIcon} from "../../icon";

export class CarFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_24_750)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1805 4C17.5625 4 18.7657 4.94408 19.0944 6.28639L19.6129 8.4071C20.3452 8.29425 21.0757 8.16503 21.8037 8.01942L22.1959 9.98058C21.7567 10.0684 21.3167 10.1505 20.8759 10.2269C21.6066 11.2431 21.9998 12.4645 21.9998 13.7191V21H19.1177C19.1185 19.8954 18.2233 18.9998 17.1187 18.9995L6.99117 19C5.88678 19.0005 4.99143 19.8956 4.99071 21H1.99983V13.659C1.99983 12.4844 2.34454 11.3379 2.988 10.3603L3.08597 10.2203C2.65781 10.1458 2.23036 10.0659 1.80371 9.98058L2.19594 8.01942C2.92398 8.16503 3.65444 8.29425 4.38679 8.4071L4.42238 8.33195L4.46153 8.21296L4.9755 6.24273C5.32011 4.92174 6.51315 4 7.87835 4H16.1805ZM8.99983 13H5.99983V15H8.99983V13ZM17.9998 13H14.9998V15H17.9998V13ZM16.0872 6H7.9424C7.53654 6 7.17721 6.25476 7.03056 6.63299L6.99312 6.75003L6.49983 8.68523C10.1549 9.106 13.8449 9.10492 17.4998 8.68199L17.0401 6.76463C16.9416 6.35313 16.6028 6.05355 16.1989 6.00647L16.0872 6Z" fill="currentColor"/></g><defs><clipPath id="clip0_24_750"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`);
  }
}
