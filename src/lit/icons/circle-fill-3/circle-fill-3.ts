import {html} from "lit";
import {TapIcon} from "../../icon";

export class CircleFill3Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.9346 5.9346 1 12 1C18.0654 1 23 5.9346 23 12C23 18.0654 18.0654 23 12 23C5.9346 23 1 18.0654 1 12ZM11.1051 15.3864C11.1113 15.8392 11.1145 16.2577 11.1145 16.6417H9.52422C9.52839 16.5582 9.53257 16.4622 9.53674 16.3537C9.54091 16.2451 9.54404 16.1335 9.54613 16.0187C9.54822 15.9039 9.54926 15.7923 9.54926 15.6838V15.3958C9.54926 15.0285 9.54509 14.6382 9.53674 14.225C9.52839 13.8118 9.50856 13.3871 9.47726 12.9509C9.44596 12.5147 9.40213 12.0754 9.34578 11.633C9.28943 11.1905 9.21326 10.7575 9.11726 10.3338C9.02126 9.91019 8.90335 9.50219 8.76352 9.10984C8.6237 8.71749 8.4557 8.35436 8.25952 8.02045L9.687 7.18776C9.77465 7.33384 9.86022 7.48932 9.9437 7.65419C10.0272 7.81906 10.1002 7.97454 10.1628 8.12063C10.2004 8.2041 10.2369 8.28863 10.2724 8.37419C10.3079 8.45976 10.3423 8.54428 10.3757 8.62776C10.4717 8.83645 10.5593 9.01384 10.6387 9.15993C10.718 9.30602 10.7983 9.42602 10.8797 9.51993C10.9611 9.61384 11.0467 9.68167 11.1364 9.72341C11.2261 9.76515 11.3294 9.78602 11.4463 9.78602C11.5882 9.78602 11.6988 9.74636 11.7781 9.66706C11.8574 9.58776 11.9169 9.48236 11.9566 9.35089C11.9962 9.21941 12.0223 9.07019 12.0348 8.90323C12.0473 8.73628 12.0578 8.56723 12.0661 8.3961C12.0661 8.35854 12.0651 8.3001 12.063 8.2208C12.0609 8.14149 12.0578 8.05802 12.0536 7.97036C12.0494 7.88271 12.0442 7.80028 12.038 7.72306C12.0317 7.64584 12.0265 7.58845 12.0223 7.55089L13.5249 7.3568C13.5291 7.55297 13.5395 7.72619 13.5562 7.87645C13.5729 8.02671 13.5948 8.16967 13.622 8.30532C13.6491 8.44097 13.6804 8.57454 13.7159 8.70602C13.7513 8.83749 13.79 8.98463 13.8317 9.14741C13.8734 9.2768 13.9246 9.37697 13.9851 9.44793C14.0456 9.51889 14.1051 9.57002 14.1635 9.60132C14.222 9.63263 14.2752 9.65141 14.3232 9.65767C14.3712 9.66393 14.4035 9.66706 14.4202 9.66706C14.5747 9.66706 14.6811 9.59923 14.7395 9.46358C14.798 9.32793 14.8272 9.15993 14.8272 8.95958C14.8272 8.83436 14.8178 8.69767 14.799 8.54949C14.7802 8.40132 14.7562 8.25315 14.727 8.10497C14.6978 7.9568 14.6654 7.8128 14.63 7.67297C14.5945 7.53315 14.5621 7.40897 14.5329 7.30045L16.0919 7.01245L16.1545 7.3568C16.1795 7.50289 16.2025 7.63541 16.2233 7.75436C16.2442 7.87332 16.262 7.98602 16.2766 8.09245C16.2912 8.19889 16.3027 8.30532 16.311 8.41176C16.3193 8.51819 16.3235 8.63193 16.3235 8.75297C16.3235 9.17871 16.2734 9.53767 16.1733 9.82984C16.0731 10.122 15.9333 10.3808 15.7538 10.6062C15.5785 10.8065 15.3854 10.9641 15.1747 11.0789C14.9639 11.1937 14.7124 11.2511 14.4202 11.2511C14.3159 11.2511 14.2011 11.2417 14.0759 11.2229C13.9507 11.2041 13.8223 11.1707 13.6908 11.1227C13.5593 11.0747 13.4289 11.009 13.2995 10.9255C13.1701 10.842 13.0491 10.7377 12.9364 10.6125C12.832 10.7293 12.7277 10.8347 12.6233 10.9286C12.519 11.0225 12.4073 11.1018 12.2884 11.1665C12.1694 11.2312 12.0411 11.2803 11.9033 11.3137C11.7656 11.3471 11.6133 11.3638 11.4463 11.3638C11.2251 11.3638 11.0331 11.3429 10.8703 11.3011V11.3387C10.9204 11.7311 10.9611 12.1558 10.9924 12.6128C11.0237 13.0698 11.0487 13.5331 11.0675 14.0027C11.0863 14.4723 11.0988 14.9335 11.1051 15.3864Z" fill="currentColor"/></svg>`);
  }
}
