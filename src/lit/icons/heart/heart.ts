import {html} from "lit";
import {TapIcon} from "../../icon";

export class HeartIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8388 5.63609C22.927 7.72431 22.985 11.0739 21.0128 13.2322L20.8388 13.4143L12 22.2531L3.16114 13.4142C1.01326 11.2664 1.01326 7.78394 3.16114 5.63606C5.24936 3.54784 8.599 3.48983 10.7573 5.46204L10.9393 5.63606L11.9992 6.69515L13.0606 5.63609C15.2085 3.48821 18.6909 3.48821 20.8388 5.63609ZM14.6245 6.90909L14.4749 7.0503L11.9992 9.52515L9.52511 7.05027C8.25277 5.77793 6.24455 5.68997 4.87047 6.78638L4.71481 6.91815L4.57536 7.05027C3.25734 8.36829 3.21027 10.476 4.43414 11.8504L4.57536 12L11.9992 19.4251L19.4246 12.0001C20.6969 10.7277 20.7849 8.7195 19.6885 7.34541L19.5567 7.18976L19.4246 7.0503C18.1554 5.7811 16.1539 5.69044 14.7801 6.77833L14.6245 6.90909Z" fill="currentColor"/></svg>`);
  }
}
