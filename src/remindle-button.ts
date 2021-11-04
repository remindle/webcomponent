import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

/**
 * A button element.
 *
 * @fires button-pressed - Indicates when the button is pressed
 * @slot - This element has a slot
 */
@customElement('remindle-button')
export class RemidleButton extends LitElement {
  /**
   * The button variant.
   */
  @property()
  variant = ButtonVariants.PRIMARY;

  /**
   * The button disabled state.
   */
  @property({ type: Boolean })
  disabled = false;

  static override styles = css`
    :host {
      display: var(--remindle-button-display, inline-block);
      box-sizing: inherit;
    }

    :host(.block) {
      --remindle-button-display: block;
      --remindle-button-width: 100%;
    }

    button {
      border: solid 1px var(--remindle-button-border-color, red);
      background: solid 1px var(--remindle-button-border-color, red);
    }

    .remindle-button {
      background-color: var(--remindle-button-bg-color, blue);
      border: none;
      border-radius: 0.25rem;
      color: var(--remindle-button-color, var(--white, #ffffff));
      cursor: pointer;
      font-weight: 400;
      font-size: 1.6rem;
      height: 4.8rem;
      line-height: 1.5;
      min-width: var(--remindle-button-min-width, 12rem);
      outline: 0;
      padding: 0 var(--remindle-button-padding-horizontal, 2.4rem);
      -webkit-appearance: button;
      position: relative;
      transition: color 0.15s ease-in-out 0s,
        background-color 0.15s ease-in-out 0s;
      text-align: center;
      text-decoration: none;
      text-transform: none;
      user-select: none;
      vertical-align: middle;
      width: var(--remindle-button-width, auto);
    }

    button[disabled],
    button[disabled]:hover {
      opacity: 0.65;
      pointer-events: none;
    }

    button:focus::before {
      content: '';
      border-radius: 0.25rem;
      border: 1px solid var(--white, #fff);
      box-sizing: inherit;
      display: block;
      position: absolute;
      height: calc(100% - 0.8rem);
      top: 0.4rem;
      left: 0.4rem;
      visibility: visible;
      width: calc(100% - 0.8rem);
    }

    .primary {
      --remindle-button-bg-color: var(--primary, #F49739);
    }

    .primary:active,
    .primary:hover {
      --remindle-button-bg-color: var(--primary-active, #FFCF2B);
    }

    .secondary {
      --remindle-button-bg-color: var(--secondary, #FFCF2B);
    }

    .secondary:active,
    .secondary:hover {
      --remindle-button-bg-color: var(--secondary-active, #F49739);
    }
  `;

  override render() {
    const classes = {
      'remindle-button': true,
      'disabled': this.disabled,
      'primary': this.variant === ButtonVariants.PRIMARY,
      'secondary': this.variant === ButtonVariants.SECONDARY
    };

    return html`
      <button
        @click=${this._onClick}
        part="button"
        class=${classMap(classes)}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('button-pressed'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'remindle-button': RemidleButton;
  }
}
