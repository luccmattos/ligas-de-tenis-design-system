/* @ds-bundle: {"format":3,"namespace":"LigasDeTNisDesignSystem_6dc710","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stepper","sourcePath":"components/display/Stepper.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"8fa9427d7a27","components/display/Badge.jsx":"6258185e6b4f","components/display/Card.jsx":"073d75c05766","components/display/Stepper.jsx":"ecb14db88719","components/forms/Input.jsx":"6459539196ed","components/forms/OptionCard.jsx":"5c96fbddff96","components/forms/Select.jsx":"d81c2040c2f0","ds-bundle.js":"617aed2ba031","ui_kits/maria-esther-panel/app.jsx":"c9d657472260","ui_kits/maria-esther-panel/data.js":"fb69e8cb2c48","ui_kits/onboarding/app.jsx":"6c598eb41842"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LigasDeTNisDesignSystem_6dc710 = window.LigasDeTNisDesignSystem_6dc710 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the LAT action primitive.
 * Variants mirror the brand's CTA hierarchy: blue→navy gradient for primary
 * actions, green gradient for conversion ("Join / Submit"), plus ghost,
 * secondary and outline for lower-emphasis actions. 44px min touch target.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    borderRadius: 'var(--radius-md)',
    transition: 'transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      minHeight: '38px',
      padding: '8px 18px',
      fontSize: '13px'
    },
    md: {
      minHeight: '44px',
      padding: '13px 24px',
      fontSize: '14px'
    },
    lg: {
      minHeight: '52px',
      padding: '16px 32px',
      fontSize: '16px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--gradient-primary)',
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-blue)'
    },
    success: {
      background: 'var(--gradient-success)',
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-green)'
    },
    secondary: {
      background: 'var(--color-off-white)',
      color: 'var(--color-gray-4)',
      fontWeight: 600
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-gray-4)'
    },
    outline: {
      background: 'var(--color-white)',
      color: 'var(--color-navy)',
      border: '2px solid var(--color-blue)'
    },
    highlight: {
      background: 'var(--color-yellow)',
      color: 'var(--color-navy)',
      fontWeight: 800
    }
  };
  function handleEnter(e) {
    if (disabled) return;
    if (variant === 'primary' || variant === 'success' || variant === 'highlight') {
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--color-gray-1)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'var(--color-navy-light)';
    } else if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--color-blue-muted)';
    }
  }
  function handleLeave(e) {
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = variants[variant].background;
    if (variant === 'outline') e.currentTarget.style.background = 'var(--color-white)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Badge — a small pill label for status, categories and highlights.
 * Tones map to the brand's semantic colors.
 */
function Badge({
  children,
  tone = 'neutral',
  style = {}
}) {
  const tones = {
    primary: {
      background: 'var(--color-blue-muted)',
      color: 'var(--color-blue)'
    },
    success: {
      background: 'var(--color-green-muted)',
      color: 'var(--color-green-dark)'
    },
    energy: {
      background: 'var(--color-yellow-muted)',
      color: 'var(--color-navy)'
    },
    navy: {
      background: 'var(--color-navy)',
      color: 'var(--color-white)'
    },
    neutral: {
      background: 'var(--color-off-white)',
      color: 'var(--color-gray-4)'
    },
    error: {
      background: 'var(--color-error-bg)',
      color: 'var(--color-error)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Card — the standard white content surface. Soft 16px radius, hairline
 * border and a navy-tinted shadow that deepens with a 4px lift on hover
 * (only when `hoverable`). Pass `header` for a navy gradient header strip.
 */
function Card({
  children,
  header,
  hoverable = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--color-white)',
      border: '1px solid var(--color-gray-1)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--color-text)',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-primary)',
      color: 'var(--color-white)',
      padding: '16px var(--space-6)',
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      letterSpacing: '0.02em'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stepper.jsx
try { (() => {
/**
 * Stepper — horizontal progress indicator for multi-step forms / onboarding.
 * Completed steps show a green check, the active step a blue circle, upcoming
 * steps a gray outline. Connector legs fill from gray to blue as you advance.
 */
function Stepper({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    const circleBg = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-white)';
    const circleBorder = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-gray-2)';
    const circleColor = done || active ? 'var(--color-white)' : 'var(--color-gray-3)';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '34px',
        height: '34px',
        borderRadius: 'var(--radius-pill)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: circleBg,
        border: `2px solid ${circleBorder}`,
        color: circleColor,
        fontWeight: 700,
        fontSize: '15px',
        transition: 'all var(--duration-base) var(--ease-out)'
      }
    }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--color-navy)' : 'var(--color-gray-4)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '3px',
        borderRadius: 'var(--radius-pill)',
        marginTop: '15px',
        background: i < current ? 'var(--color-blue)' : 'var(--color-gray-1)',
        transition: 'background var(--duration-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — labelled text field. Label always sits above the field (never
 * placeholder-only). Off-white at rest, white on focus with a blue ring.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  id,
  value,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const showError = Boolean(error);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--color-text)',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid ${showError ? 'var(--color-error)' : focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
    background: showError ? 'var(--color-error-bg)' : focused ? 'var(--color-white)' : 'var(--color-off-white)',
    boxShadow: focused && !showError ? 'var(--ring-blue)' : 'none',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-gray-4)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    disabled: disabled,
    "aria-invalid": showError || undefined,
    style: fieldStyle,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    }
  }, rest)), showError ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--color-error)',
      fontWeight: 600
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--color-gray-4)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
/**
 * OptionCard — a selectable radio card used for category / modality / interest
 * choices in registration flows. Icon (or emoji/glyph) above, label below.
 * Selected state: blue border, blue-muted fill, subtle ring.
 */
function OptionCard({
  icon,
  label,
  description,
  selected = false,
  disabled = false,
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": selected,
    disabled: disabled,
    onClick: onSelect,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      textAlign: 'center',
      padding: '20px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
      background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
      boxShadow: selected ? 'var(--ring-blue)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '28px',
      lineHeight: 1,
      color: selected ? 'var(--color-blue)' : 'var(--color-navy)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '15px',
      color: 'var(--color-navy)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--color-gray-4)',
      lineHeight: 1.4
    }
  }, description));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Select — labelled dropdown sharing the Input visual language.
 * Pass `options` as [{ value, label }] or plain strings.
 */
function Select({
  label,
  options = [],
  value,
  disabled = false,
  id,
  placeholder,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-gray-4)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--color-text)',
      padding: '12px 40px 12px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
      background: focused ? 'var(--color-white)' : 'var(--color-off-white)',
      boxShadow: focused ? 'var(--ring-blue)' : 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--color-gray-4)',
      fontSize: '12px'
    }
  }, "\u25BC")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ds-bundle.js
try { (() => {
/* @ds-bundle: {"format":3,"namespace":"LigasDeTNisDesignSystem_6dc710","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stepper","sourcePath":"components/display/Stepper.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"8fa9427d7a27","components/display/Badge.jsx":"47c5c22e48a2","components/display/Card.jsx":"073d75c05766","components/display/Stepper.jsx":"ecb14db88719","components/forms/Input.jsx":"6459539196ed","components/forms/OptionCard.jsx":"5c96fbddff96","components/forms/Select.jsx":"d81c2040c2f0","ui_kits/maria-esther-panel/app.jsx":"0f64e4896401","ui_kits/maria-esther-panel/data.js":"fb69e8cb2c48","ui_kits/onboarding/app.jsx":"65e28a7eab69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.LigasDeTNisDesignSystem_6dc710 = window.LigasDeTNisDesignSystem_6dc710 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/buttons/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /**
       * Button — the LAT action primitive.
       * Variants mirror the brand's CTA hierarchy: blue→navy gradient for primary
       * actions, green gradient for conversion ("Join / Submit"), plus ghost,
       * secondary and outline for lower-emphasis actions. 44px min touch target.
       */
      function Button({
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        disabled = false,
        type = 'button',
        children,
        style = {},
        ...rest
      }) {
        const base = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          borderRadius: 'var(--radius-md)',
          transition: 'transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
          width: fullWidth ? '100%' : 'auto',
          whiteSpace: 'nowrap'
        };
        const sizes = {
          sm: {
            minHeight: '38px',
            padding: '8px 18px',
            fontSize: '13px'
          },
          md: {
            minHeight: '44px',
            padding: '13px 24px',
            fontSize: '14px'
          },
          lg: {
            minHeight: '52px',
            padding: '16px 32px',
            fontSize: '16px'
          }
        };
        const variants = {
          primary: {
            background: 'var(--gradient-primary)',
            color: 'var(--color-white)',
            boxShadow: 'var(--shadow-blue)'
          },
          success: {
            background: 'var(--gradient-success)',
            color: 'var(--color-white)',
            boxShadow: 'var(--shadow-green)'
          },
          secondary: {
            background: 'var(--color-off-white)',
            color: 'var(--color-gray-4)',
            fontWeight: 600
          },
          ghost: {
            background: 'transparent',
            color: 'var(--color-gray-4)'
          },
          outline: {
            background: 'var(--color-white)',
            color: 'var(--color-navy)',
            border: '2px solid var(--color-blue)'
          },
          highlight: {
            background: 'var(--color-yellow)',
            color: 'var(--color-navy)',
            fontWeight: 800
          }
        };
        function handleEnter(e) {
          if (disabled) return;
          if (variant === 'primary' || variant === 'success' || variant === 'highlight') {
            e.currentTarget.style.transform = 'translateY(-1px)';
          } else if (variant === 'secondary') {
            e.currentTarget.style.background = 'var(--color-gray-1)';
          } else if (variant === 'ghost') {
            e.currentTarget.style.background = 'var(--color-navy-light)';
          } else if (variant === 'outline') {
            e.currentTarget.style.background = 'var(--color-blue-muted)';
          }
        }
        function handleLeave(e) {
          e.currentTarget.style.transform = 'translateY(0)';
          if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = variants[variant].background;
          if (variant === 'outline') e.currentTarget.style.background = 'var(--color-white)';
        }
        return /*#__PURE__*/React.createElement("button", _extends({
          type: type,
          disabled: disabled,
          style: {
            ...base,
            ...sizes[size],
            ...variants[variant],
            ...style
          },
          onMouseEnter: handleEnter,
          onMouseLeave: handleLeave
        }, rest), children);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/buttons/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Badge.jsx
  try {
    (() => {
      /**
       * Badge — a small pill label for status, categories and highlights.
       * Tones map to the brand's semantic colors.
       */
      function Badge({
        children,
        tone = 'neutral',
        style = {}
      }) {
        const tones = {
          primary: {
            background: 'var(--color-blue-muted)',
            color: 'var(--color-blue)'
          },
          success: {
            background: 'var(--color-green-muted)',
            color: 'var(--color-green-dark)'
          },
          energy: {
            background: 'var(--color-yellow-muted)',
            color: 'var(--color-navy)'
          },
          navy: {
            background: 'var(--color-navy)',
            color: 'var(--color-white)'
          },
          neutral: {
            background: 'var(--color-off-white)',
            color: 'var(--color-gray-4)'
          },
          error: {
            background: 'var(--color-error-bg)',
            color: 'var(--color-error)'
          }
        };
        return /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            ...tones[tone],
            ...style
          }
        }, children);
      }
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Card.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const {
        useState
      } = React;
      /**
       * Card — the standard white content surface. Soft 16px radius, hairline
       * border and a navy-tinted shadow that deepens with a 4px lift on hover
       * (only when `hoverable`). Pass `header` for a navy gradient header strip.
       */
      function Card({
        children,
        header,
        hoverable = false,
        padding = 'var(--space-6)',
        style = {},
        ...rest
      }) {
        const [hover, setHover] = useState(false);
        return /*#__PURE__*/React.createElement("div", _extends({
          onMouseEnter: () => hoverable && setHover(true),
          onMouseLeave: () => hoverable && setHover(false),
          style: {
            background: 'var(--color-white)',
            border: '1px solid var(--color-gray-1)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
            transform: hover ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
            overflow: 'hidden',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text)',
            ...style
          }
        }, rest), header && /*#__PURE__*/React.createElement("div", {
          style: {
            background: 'var(--gradient-primary)',
            color: 'var(--color-white)',
            padding: '16px var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            letterSpacing: '0.02em'
          }
        }, header), /*#__PURE__*/React.createElement("div", {
          style: {
            padding
          }
        }, children));
      }
      Object.assign(__ds_scope, {
        Card
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Card.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Stepper.jsx
  try {
    (() => {
      /**
       * Stepper — horizontal progress indicator for multi-step forms / onboarding.
       * Completed steps show a green check, the active step a blue circle, upcoming
       * steps a gray outline. Connector legs fill from gray to blue as you advance.
       */
      function Stepper({
        steps = [],
        current = 0,
        style = {}
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'var(--font-body)',
            ...style
          }
        }, steps.map((label, i) => {
          const done = i < current;
          const active = i === current;
          const circleBg = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-white)';
          const circleBorder = done ? 'var(--color-green)' : active ? 'var(--color-blue)' : 'var(--color-gray-2)';
          const circleColor = done || active ? 'var(--color-white)' : 'var(--color-gray-3)';
          return /*#__PURE__*/React.createElement(React.Fragment, {
            key: i
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              flex: '0 0 auto'
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-pill)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: circleBg,
              border: `2px solid ${circleBorder}`,
              color: circleColor,
              fontWeight: 700,
              fontSize: '15px',
              transition: 'all var(--duration-base) var(--ease-out)'
            }
          }, done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
            style: {
              fontSize: '12px',
              fontWeight: active ? 700 : 600,
              color: active ? 'var(--color-navy)' : 'var(--color-gray-4)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap'
            }
          }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1,
              height: '3px',
              borderRadius: 'var(--radius-pill)',
              marginTop: '15px',
              background: i < current ? 'var(--color-blue)' : 'var(--color-gray-1)',
              transition: 'background var(--duration-base) var(--ease-out)'
            }
          }));
        }));
      }
      Object.assign(__ds_scope, {
        Stepper
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Stepper.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const {
        useState
      } = React;
      /**
       * Input — labelled text field. Label always sits above the field (never
       * placeholder-only). Off-white at rest, white on focus with a blue ring.
       */
      function Input({
        label,
        hint,
        error,
        type = 'text',
        id,
        value,
        disabled = false,
        style = {},
        ...rest
      }) {
        const [focused, setFocused] = useState(false);
        const fieldId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
        const showError = Boolean(error);
        const fieldStyle = {
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--color-text)',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          border: `1.5px solid ${showError ? 'var(--color-error)' : focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
          background: showError ? 'var(--color-error-bg)' : focused ? 'var(--color-white)' : 'var(--color-off-white)',
          boxShadow: focused && !showError ? 'var(--ring-blue)' : 'none',
          outline: 'none',
          transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'text'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: fieldId,
          style: {
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--color-gray-4)'
          }
        }, label), /*#__PURE__*/React.createElement("input", _extends({
          id: fieldId,
          type: type,
          value: value,
          disabled: disabled,
          "aria-invalid": showError || undefined,
          style: fieldStyle,
          onFocus: e => {
            setFocused(true);
            rest.onFocus?.(e);
          },
          onBlur: e => {
            setFocused(false);
            rest.onBlur?.(e);
          }
        }, rest)), showError ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: '12px',
            color: 'var(--color-error)',
            fontWeight: 600
          }
        }, error) : hint ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: '12px',
            color: 'var(--color-gray-4)'
          }
        }, hint) : null);
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/OptionCard.jsx
  try {
    (() => {
      /**
       * OptionCard — a selectable radio card used for category / modality / interest
       * choices in registration flows. Icon (or emoji/glyph) above, label below.
       * Selected state: blue border, blue-muted fill, subtle ring.
       */
      function OptionCard({
        icon,
        label,
        description,
        selected = false,
        disabled = false,
        onSelect,
        style = {}
      }) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          role: "radio",
          "aria-checked": selected,
          disabled: disabled,
          onClick: onSelect,
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textAlign: 'center',
            padding: '20px 16px',
            borderRadius: 'var(--radius-md)',
            border: `1.5px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
            background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
            boxShadow: selected ? 'var(--ring-blue)' : 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            fontFamily: 'var(--font-body)',
            transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
            ...style
          }
        }, icon != null && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: '28px',
            lineHeight: 1,
            color: selected ? 'var(--color-blue)' : 'var(--color-navy)'
          }
        }, icon), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 700,
            fontSize: '15px',
            color: 'var(--color-navy)'
          }
        }, label), description && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: '12px',
            color: 'var(--color-gray-4)',
            lineHeight: 1.4
          }
        }, description));
      }
      Object.assign(__ds_scope, {
        OptionCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/OptionCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const {
        useState
      } = React;
      /**
       * Select — labelled dropdown sharing the Input visual language.
       * Pass `options` as [{ value, label }] or plain strings.
       */
      function Select({
        label,
        options = [],
        value,
        disabled = false,
        id,
        placeholder,
        style = {},
        ...rest
      }) {
        const [focused, setFocused] = useState(false);
        const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
        const opts = options.map(o => typeof o === 'string' ? {
          value: o,
          label: o
        } : o);
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            ...style
          }
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: fieldId,
          style: {
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--color-gray-4)'
          }
        }, label), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("select", _extends({
          id: fieldId,
          value: value,
          disabled: disabled,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          style: {
            width: '100%',
            boxSizing: 'border-box',
            appearance: 'none',
            WebkitAppearance: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-text)',
            padding: '12px 40px 12px 16px',
            borderRadius: 'var(--radius-md)',
            border: `1.5px solid ${focused ? 'var(--color-blue)' : 'var(--color-gray-2)'}`,
            background: focused ? 'var(--color-white)' : 'var(--color-off-white)',
            boxShadow: focused ? 'var(--ring-blue)' : 'none',
            outline: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
          }
        }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
          value: ""
        }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
          key: o.value,
          value: o.value
        }, o.label))), /*#__PURE__*/React.createElement("span", {
          "aria-hidden": true,
          style: {
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: 'var(--color-gray-4)',
            fontSize: '12px'
          }
        }, "\u25BC")));
      }
      Object.assign(__ds_scope, {
        Select
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/maria-esther-panel/app.jsx
  try {
    (() => {
      /* Maria Esther Match Desk — UI kit screens.
         Recreates the operator panel (login → desk → player → recommendations).
         Composes the DS primitives from the bundle namespace. */
      const {
        Button,
        Badge,
        Input,
        Select
      } = window.LigasDeTNisDesignSystem_6dc710;
      const D = window.MED_DATA;
      const HATCH = 'repeating-linear-gradient(-18deg, transparent, transparent 12px, rgba(255,255,255,0.06) 12px, rgba(255,255,255,0.06) 13px)';
      const DESK_BG = {
        backgroundColor: '#e8edf5',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 100% 0%, rgba(41,170,225,0.12), transparent),' + 'linear-gradient(rgba(31,46,96,0.04) 1px, transparent 1px),' + 'linear-gradient(90deg, rgba(31,46,96,0.04) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 24px 24px, 24px 24px'
      };
      function SectionLabel({
        children
      }) {
        return /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-gray-4)',
            margin: 0
          }
        }, children);
      }

      /* ── Login ───────────────────────────────────────────────── */
      function LoginScreen({
        onSignIn
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            minHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-navy)',
            padding: 24,
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage: 'repeating-linear-gradient(-18deg, transparent, transparent 12px, #fff 12px, #fff 13px)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            right: -96,
            top: -96,
            width: 256,
            height: 256,
            borderRadius: '50%',
            background: 'rgba(41,170,225,0.20)',
            filter: 'blur(48px)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: '100%',
            maxWidth: 400,
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            padding: 32,
            boxShadow: 'var(--shadow-xl)'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "../../assets/logos/logo-official-lat-default-ligas-de-tenis.svg",
          alt: "LAT",
          style: {
            height: 64,
            marginBottom: 18
          }
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            letterSpacing: '0.03em',
            color: 'var(--color-navy)',
            margin: 0,
            lineHeight: 1
          }
        }, "MARIA ESTHER"), /*#__PURE__*/React.createElement("p", {
          style: {
            marginTop: 4,
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'var(--color-blue)'
          }
        }, "Match desk \u2014 piloto manual"), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "E-mail do operador",
          type: "email",
          defaultValue: D.operator.email,
          placeholder: "Preencha o seu e-mail"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Senha",
          type: "password",
          defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          fullWidth: true,
          onClick: onSignIn
        }, "Entrar"))));
      }

      /* ── Desk header ─────────────────────────────────────────── */
      function DeskHeader({
        onSignOut
      }) {
        const s = D.summary;
        return /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '16px 24px',
            background: 'var(--color-navy)',
            borderBottom: '1px solid var(--color-navy-dark)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(105deg, rgba(41,170,225,0.15) 0%, transparent 45%, rgba(247,201,73,0.08) 100%)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--color-blue-light)'
          }
        }, "Liga Alphaville de T\xEAnis"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            letterSpacing: '0.03em',
            color: '#fff',
            lineHeight: 1.05
          }
        }, "MARIA ESTHER MATCH DESK"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '4px 0 0',
            fontSize: 13,
            color: 'rgba(255,255,255,0.75)'
          }
        }, s.total, " eleg\xEDveis \xB7 ", s.neverPlayed, " nunca jogaram \xB7 ", s.inactive14d, " com 14+ dias \xB7 ", s.contactedToday, " acionados hoje")), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            display: 'flex',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary"
        }, "Atualizar fila"), /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          style: {
            color: '#fff'
          },
          onClick: onSignOut
        }, "Sair")));
      }

      /* ── Queue ───────────────────────────────────────────────── */
      function QueueRow({
        row,
        selected,
        onSelect
      }) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: () => onSelect(row),
          style: {
            display: 'block',
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            border: 'none',
            borderBottom: '1px solid var(--color-gray-1)',
            padding: '16px',
            background: selected ? 'var(--color-blue-muted)' : 'transparent',
            borderLeft: `4px solid ${selected ? 'var(--color-blue)' : 'transparent'}`,
            fontFamily: 'var(--font-body)',
            transition: 'background var(--duration-fast) var(--ease-out)'
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontWeight: 600,
            color: 'var(--color-navy)'
          }
        }, row.name), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '4px 0 0',
            fontSize: 12,
            lineHeight: 1.5,
            color: 'var(--color-gray-4)'
          }
        }, row.category, " \xB7 ", row.inactivity, " \xB7 ", row.games, " jogos \xB7 ", row.court ? 'Tem quadra' : 'Sem quadra'), row.contactedAt ? /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '6px 0 0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-green-dark)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--color-green)'
          },
          "aria-hidden": true
        }), " Acionado em ", row.contactedAt) : /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '6px 0 0',
            fontSize: 12,
            color: 'var(--color-gray-3)'
          }
        }, "Nunca acionado no painel"));
      }
      function QueuePanel({
        selectedId,
        onSelect
      }) {
        return /*#__PURE__*/React.createElement("aside", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            borderRight: '1px solid var(--color-gray-1)',
            background: 'var(--color-white)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: 16,
            borderBottom: '1px solid var(--color-gray-1)',
            background: 'rgba(243,245,248,0.8)'
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Buscar",
          type: "search",
          placeholder: "Nome do jogador"
        }), /*#__PURE__*/React.createElement(Select, {
          label: "Categoria",
          options: ['Todas categorias', 'A · 35+', 'B · Open', 'C · Open'],
          defaultValue: "Todas categorias"
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 12,
            color: 'var(--color-gray-4)'
          }
        }, D.queue.length, " jogador(es) na fila")), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            overflowY: 'auto'
          }
        }, D.queue.map(row => /*#__PURE__*/React.createElement(QueueRow, {
          key: row.id,
          row: row,
          selected: row.id === selectedId,
          onSelect: onSelect
        }))));
      }

      /* ── Recommendation card ─────────────────────────────────── */
      function RecommendationCard({
        s,
        selected,
        onSelect
      }) {
        return /*#__PURE__*/React.createElement("article", {
          style: {
            borderRadius: 'var(--radius-lg)',
            padding: 16,
            border: `1px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-1)'}`,
            background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
            boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            transition: 'box-shadow var(--duration-base) var(--ease-out)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            lineHeight: 1,
            color: 'var(--color-navy)'
          }
        }, String(s.rank).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
          style: {
            minWidth: 0,
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("h3", {
          style: {
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            color: 'var(--color-navy)'
          }
        }, s.name), /*#__PURE__*/React.createElement("ul", {
          style: {
            margin: '8px 0 0',
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, s.reasons.map((r, i) => /*#__PURE__*/React.createElement("li", {
          key: i,
          style: {
            fontSize: 14,
            color: 'var(--color-gray-4)'
          }
        }, "\u2014 ", r.bold ? /*#__PURE__*/React.createElement("strong", {
          style: {
            color: 'var(--color-navy)',
            fontWeight: 600
          }
        }, r.text) : r.text))), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '8px 0 0',
            fontSize: 12,
            color: 'var(--color-gray-3)'
          }
        }, "Score ", s.score))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 16
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: selected ? 'primary' : 'outline',
          onClick: onSelect
        }, selected ? 'Opção selecionada' : 'Selecionar esta opção')));
      }

      /* ── Player detail ───────────────────────────────────────── */
      function PlayerDetail({
        player
      }) {
        const [selectedRank, setSelectedRank] = React.useState(null);
        const suggestions = D.suggestions[player.id] || D.suggestions.r1;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/React.createElement("header", {
          style: {
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--color-navy-dark)',
            background: 'var(--color-navy)',
            padding: '20px 24px',
            color: '#fff'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            opacity: 0.07,
            backgroundImage: 'repeating-linear-gradient(-12deg, transparent, transparent 8px, #fff 8px, #fff 9px)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            position: 'relative',
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 38,
            letterSpacing: '0.03em'
          }
        }, player.name.toUpperCase()), /*#__PURE__*/React.createElement("p", {
          style: {
            position: 'relative',
            margin: '4px 0 0',
            fontSize: 13,
            color: 'rgba(255,255,255,0.8)'
          }
        }, player.category, " \xB7 ", player.inactivity, " \xB7 ", player.games, " jogos no semestre \xB7 ", player.court ? 'Tem quadra' : 'Sem quadra', " \xB7 ", player.availability)), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            flex: 1,
            overflowY: 'auto',
            padding: 24
          }
        }, /*#__PURE__*/React.createElement("section", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(SectionLabel, null, "Mensagem para o jogador eleg\xEDvel"), /*#__PURE__*/React.createElement("textarea", {
          defaultValue: D.initialMessage,
          rows: 12,
          style: {
            width: '100%',
            boxSizing: 'border-box',
            resize: 'vertical',
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--color-text)',
            padding: 12,
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--color-gray-2)',
            background: '#fff',
            boxShadow: 'var(--shadow-sm)'
          }
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          fullWidth: true
        }, "Abrir WhatsApp com o jogador"), /*#__PURE__*/React.createElement(Button, {
          variant: "success",
          fullWidth: true
        }, "Confirmar que enviei a sugest\xE3o")), /*#__PURE__*/React.createElement("section", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(SectionLabel, null, "Recomenda\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(41,170,225,0.2)',
            background: 'var(--color-blue-muted)',
            padding: '8px 12px',
            fontSize: 14,
            color: 'var(--color-navy)'
          }
        }, "Essa rodada faz sentido para acionar o jogador? Avalie antes ou depois do envio."), suggestions.map(s => /*#__PURE__*/React.createElement(RecommendationCard, {
          key: s.rank,
          s: s,
          selected: selectedRank === s.rank,
          onSelect: () => setSelectedRank(s.rank)
        })))));
      }

      /* ── Empty state ─────────────────────────────────────────── */
      function EmptyState() {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: 32,
            textAlign: 'center'
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 32,
            color: 'var(--color-navy)',
            letterSpacing: '0.02em'
          }
        }, "SELECIONE UM JOGADOR"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '12px 0 0',
            maxWidth: 420,
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--color-gray-4)'
          }
        }, "Escolha algu\xE9m na fila para revisar as 3 recomenda\xE7\xF5es, avaliar a rodada e enviar a sugest\xE3o pelo WhatsApp do jogador eleg\xEDvel."));
      }

      /* ── App ─────────────────────────────────────────────────── */
      function MatchDeskApp() {
        const [signedIn, setSignedIn] = React.useState(false);
        const [selected, setSelected] = React.useState(null);
        if (!signedIn) return /*#__PURE__*/React.createElement(LoginScreen, {
          onSignIn: () => setSignedIn(true)
        });
        return /*#__PURE__*/React.createElement("div", {
          style: {
            ...DESK_BG,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%'
          }
        }, /*#__PURE__*/React.createElement(DeskHeader, {
          onSignOut: () => {
            setSignedIn(false);
            setSelected(null);
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 360px) 1fr',
            flex: 1,
            minHeight: 0
          }
        }, /*#__PURE__*/React.createElement(QueuePanel, {
          selectedId: selected?.id ?? null,
          onSelect: setSelected
        }), /*#__PURE__*/React.createElement("main", {
          style: {
            minHeight: 0,
            background: '#e8edf5'
          }
        }, selected ? /*#__PURE__*/React.createElement(PlayerDetail, {
          key: selected.id,
          player: selected
        }) : /*#__PURE__*/React.createElement(EmptyState, null))));
      }
      window.MatchDeskApp = MatchDeskApp;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/maria-esther-panel/app.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/maria-esther-panel/data.js
  try {
    (() => {
      /* Fake operational data for the Maria Esther Match Desk UI kit.
         Mirrors the shape used by the real panel (PanelQueueRow / RankedSuggestion). */
      window.MED_DATA = {
        operator: {
          name: 'Fernando',
          email: 'fernando@ligasdetenis.com.br'
        },
        summary: {
          total: 18,
          neverPlayed: 5,
          inactive14d: 7,
          contactedToday: 3
        },
        queue: [{
          id: 'r1',
          name: 'Rafael Moura',
          category: 'B · Open',
          games: 0,
          court: true,
          inactivity: 'Nunca jogou no semestre',
          availability: 'Disponibilidade alta',
          contactedAt: null
        }, {
          id: 'r2',
          name: 'Camila Restrepo',
          category: 'C · Open',
          games: 1,
          court: false,
          inactivity: '18 dias sem jogar',
          availability: 'Disponibilidade média',
          contactedAt: '07/06 · 14:20'
        }, {
          id: 'r3',
          name: 'Henrique Salles',
          category: 'A · 35+',
          games: 2,
          court: true,
          inactivity: '21 dias sem jogar',
          availability: 'Disponibilidade baixa',
          contactedAt: null
        }, {
          id: 'r4',
          name: 'Patrícia Lemos',
          category: 'B · Open',
          games: 0,
          court: false,
          inactivity: 'Nunca jogou no semestre',
          availability: 'Disponibilidade alta',
          contactedAt: null
        }, {
          id: 'r5',
          name: 'Diego Antunes',
          category: 'C · Open',
          games: 3,
          court: true,
          inactivity: '16 dias sem jogar',
          availability: 'Disponibilidade média',
          contactedAt: '06/06 · 09:05'
        }],
        suggestions: {
          r1: [{
            rank: 1,
            name: 'Bruno Carvalho',
            score: 92,
            reasons: [{
              text: 'Tem quadra em casa (Alphaville)',
              bold: true
            }, {
              text: 'Mesma categoria B · Open'
            }, {
              text: 'Jogou 2 partidas — disponível esta semana'
            }]
          }, {
            rank: 2,
            name: 'Tiago Nogueira',
            score: 81,
            reasons: [{
              text: 'Mesma categoria B · Open',
              bold: true
            }, {
              text: 'Sem quadra — Rafael tem quadra'
            }, {
              text: '12 dias sem jogar'
            }]
          }, {
            rank: 3,
            name: 'Marcelo Pires',
            score: 74,
            reasons: [{
              text: 'Categoria B · Open'
            }, {
              text: 'Disponibilidade média nas terças e quintas'
            }]
          }]
        },
        initialMessage: 'Oi, Rafael! Aqui é a Maria Esther, da Liga Alphaville de Tênis. 🎾\n\n' + 'Vi que você ainda não marcou sua primeira partida do semestre. Separei 3 jogadores da sua categoria que estão disponíveis essa semana.\n\n' + 'Quer que eu te apresente um deles pra marcar o jogo?'
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/maria-esther-panel/data.js",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/onboarding/app.jsx
  try {
    (() => {
      /* Onboarding & Registration — UI kit screens.
         Player-facing surface: hero + multi-step "quero me inscrever" form.
         Composes DS primitives from the bundle. */
      const {
        Button,
        Input,
        Select,
        OptionCard,
        Stepper,
        Badge,
        Card
      } = window.LigasDeTNisDesignSystem_6dc710;
      const STEPS = ['Dados', 'Interesse', 'Disponibilidade', 'Confirmar'];
      function Hero({
        onStart
      }) {
        return /*#__PURE__*/React.createElement("section", {
          style: {
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--color-navy)',
            color: '#fff',
            padding: '64px 8%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: 'repeating-linear-gradient(-18deg, transparent, transparent 12px, #fff 12px, #fff 13px)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            right: -120,
            top: -120,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(41,170,225,0.22)',
            filter: 'blur(80px)'
          },
          "aria-hidden": true
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 40,
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
          tone: "energy"
        }, "Inscri\xE7\xF5es abertas \xB7 1\xBA semestre"), /*#__PURE__*/React.createElement("h1", {
          style: {
            margin: '16px 0 0',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 6vw, 88px)',
            letterSpacing: '0.02em',
            lineHeight: 0.95
          }
        }, "JOGUE UM CIRCUITO", /*#__PURE__*/React.createElement("br", null), "DE VERDADE"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '20px 0 0',
            maxWidth: 520,
            fontSize: 18,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.82)'
          }
        }, "Ranking de desafios e torneios no formato ATP, para tenistas amadores de Alphaville e regi\xE3o. Comunidade, competi\xE7\xE3o e networking de verdade."), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 28,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "success",
          size: "lg",
          onClick: onStart
        }, "Quero me inscrever"), /*#__PURE__*/React.createElement(Button, {
          variant: "outline",
          size: "lg",
          style: {
            borderColor: 'rgba(255,255,255,0.4)',
            background: 'transparent',
            color: '#fff'
          }
        }, "Ver como funciona")), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 32,
            display: 'flex',
            gap: 32
          }
        }, [['10+', 'anos de liga'], ['1.000+', 'jogadores'], ['6', 'etapas por torneio']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
          key: l
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            color: 'var(--color-yellow)',
            lineHeight: 1
          }
        }, n), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '4px 0 0',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.7)'
          }
        }, l))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: "../../assets/logos/logo-official-lat-light-ligas-de-tenis.svg",
          alt: "Liga Alphaville de T\xEAnis",
          style: {
            width: '100%',
            maxWidth: 320,
            filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))'
          }
        }))));
      }
      function FormShell({
        children,
        step
      }) {
        return /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--color-off-white)',
            padding: '64px 5%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 560,
            margin: '0 auto'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            marginBottom: 28
          }
        }, /*#__PURE__*/React.createElement(Stepper, {
          steps: STEPS,
          current: step
        })), /*#__PURE__*/React.createElement(Card, null, children)));
      }
      function StepHeading({
        kicker,
        title
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginBottom: 20
          }
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.10em',
            color: 'var(--color-blue)'
          }
        }, kicker), /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: '6px 0 0',
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            letterSpacing: '0.02em',
            color: 'var(--color-navy)',
            lineHeight: 1
          }
        }, title));
      }
      function RegistrationFlow() {
        const [step, setStep] = React.useState(0);
        const [interest, setInterest] = React.useState('ambos');
        const [days, setDays] = React.useState(['ter', 'qui']);
        const toggleDay = d => setDays(cur => cur.includes(d) ? cur.filter(x => x !== d) : [...cur, d]);
        const back = () => setStep(s => Math.max(0, s - 1));
        const next = () => setStep(s => Math.min(STEPS.length - 1, s + 1));
        return /*#__PURE__*/React.createElement(FormShell, {
          step: step
        }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
          kicker: "Passo 1 de 4",
          title: "SEUS DADOS"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Nome completo",
          placeholder: "Como voc\xEA assina"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "E-mail",
          type: "email",
          placeholder: "seu@email.com"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "WhatsApp",
          placeholder: "(11) 90000-0000",
          hint: "Usamos para combinar suas partidas."
        }), /*#__PURE__*/React.createElement(Select, {
          label: "Onde voc\xEA joga",
          placeholder: "Selecione o condom\xEDnio / clube",
          options: ['Alphaville', 'Tamboré', 'Pinheiros', 'Morumbi', 'Outro']
        }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
          kicker: "Passo 2 de 4",
          title: "O QUE VOC\xCA QUER"
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12
          }
        }, /*#__PURE__*/React.createElement(OptionCard, {
          label: "Ranking",
          description: "Desafios o semestre todo",
          selected: interest === 'ranking',
          onSelect: () => setInterest('ranking')
        }), /*#__PURE__*/React.createElement(OptionCard, {
          label: "Torneio",
          description: "Etapas no formato ATP",
          selected: interest === 'torneio',
          onSelect: () => setInterest('torneio')
        }), /*#__PURE__*/React.createElement(OptionCard, {
          label: "Os dois",
          description: "Ranking + torneio",
          selected: interest === 'ambos',
          onSelect: () => setInterest('ambos')
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 16
          }
        }, /*#__PURE__*/React.createElement(Select, {
          label: "Sua categoria",
          placeholder: "N\xE3o sei \u2014 me ajudem",
          options: ['A · avançado', 'B · intermediário', 'C · iniciante']
        }))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
          kicker: "Passo 3 de 4",
          title: "DISPONIBILIDADE"
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '0 0 14px',
            fontSize: 14,
            color: 'var(--color-gray-4)'
          }
        }, "Quais dias voc\xEA costuma jogar? Pode marcar v\xE1rios."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10
          }
        }, [['seg', 'Seg'], ['ter', 'Ter'], ['qua', 'Qua'], ['qui', 'Qui'], ['sex', 'Sex'], ['sab', 'Sáb'], ['dom', 'Dom']].map(([k, l]) => /*#__PURE__*/React.createElement(OptionCard, {
          key: k,
          label: l,
          selected: days.includes(k),
          onSelect: () => toggleDay(k)
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-yellow-muted)'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 20
          },
          "aria-hidden": true
        }, "\uD83C\uDFBE"), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--color-navy)',
            fontWeight: 600
          }
        }, "Tem quadra em casa? Conte pra gente \u2014 facilita o match!"))), step === 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'center',
            padding: '12px 0'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 64,
            height: 64,
            margin: '0 auto',
            borderRadius: '50%',
            background: 'var(--gradient-success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 30,
            boxShadow: 'var(--shadow-green)'
          }
        }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
          style: {
            margin: '20px 0 0',
            fontFamily: 'var(--font-display)',
            fontSize: 40,
            letterSpacing: '0.02em',
            color: 'var(--color-navy)'
          }
        }, "BEM-VINDO \xC0 LIGA"), /*#__PURE__*/React.createElement("p", {
          style: {
            margin: '10px auto 0',
            maxWidth: 380,
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--color-gray-4)'
          }
        }, "Recebemos sua inscri\xE7\xE3o. Em instantes a Maria Esther vai te chamar no WhatsApp com os pr\xF3ximos passos e o pagamento."), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Badge, {
          tone: "success"
        }, "Inscri\xE7\xE3o enviada"), /*#__PURE__*/React.createElement(Badge, {
          tone: "primary"
        }, interest === 'ambos' ? 'Ranking + Torneio' : interest === 'ranking' ? 'Ranking' : 'Torneio'))), step < 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 28,
            display: 'flex',
            gap: 12,
            justifyContent: 'space-between'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: back,
          disabled: step === 0
        }, "Voltar"), step < 2 ? /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: next
        }, "Continuar") : /*#__PURE__*/React.createElement(Button, {
          variant: "success",
          onClick: next
        }, "Finalizar inscri\xE7\xE3o")), step === 3 && /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "outline",
          onClick: () => setStep(0)
        }, "Fazer outra inscri\xE7\xE3o")));
      }
      function OnboardingApp() {
        const formRef = React.useRef(null);
        const scrollToForm = () => {
          const el = formRef.current;
          if (el) window.scrollTo({
            top: el.offsetTop - 16,
            behavior: 'smooth'
          });
        };
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
          onStart: scrollToForm
        }), /*#__PURE__*/React.createElement("div", {
          ref: formRef
        }, /*#__PURE__*/React.createElement(RegistrationFlow, null)));
      }
      window.OnboardingApp = OnboardingApp;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/onboarding/app.jsx",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.Badge = __ds_scope.Badge;
  __ds_ns.Card = __ds_scope.Card;
  __ds_ns.Stepper = __ds_scope.Stepper;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.OptionCard = __ds_scope.OptionCard;
  __ds_ns.Select = __ds_scope.Select;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-bundle.js", error: String((e && e.message) || e) }); }

// ui_kits/maria-esther-panel/app.jsx
try { (() => {
/* Maria Esther Match Desk — UI kit screens.
   Recreates the operator panel (login → desk → player → recommendations).
   Composes the DS primitives from the bundle namespace. */
const {
  Button,
  Badge,
  Input,
  Select
} = window.LigasDeTNisDesignSystem_6dc710;
const D = window.MED_DATA;
const HATCH = 'repeating-linear-gradient(-18deg, transparent, transparent 12px, rgba(255,255,255,0.06) 12px, rgba(255,255,255,0.06) 13px)';
const DESK_BG = {
  backgroundColor: '#e8edf5',
  backgroundImage: 'radial-gradient(ellipse 80% 50% at 100% 0%, rgba(41,170,225,0.12), transparent),' + 'linear-gradient(rgba(31,46,96,0.04) 1px, transparent 1px),' + 'linear-gradient(90deg, rgba(31,46,96,0.04) 1px, transparent 1px)',
  backgroundSize: '100% 100%, 24px 24px, 24px 24px'
};
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--color-gray-4)',
      margin: 0
    }
  }, children);
}

/* ── Login ───────────────────────────────────────────────── */
function LoginScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-navy)',
      padding: 24,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.06,
      backgroundImage: 'repeating-linear-gradient(-18deg, transparent, transparent 12px, #fff 12px, #fff 13px)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -96,
      top: -96,
      width: 256,
      height: 256,
      borderRadius: '50%',
      background: 'rgba(41,170,225,0.20)',
      filter: 'blur(48px)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 400,
      background: 'var(--color-white)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-official-lat-default-ligas-de-tenis.svg",
    alt: "LAT",
    style: {
      height: 64,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      letterSpacing: '0.03em',
      color: 'var(--color-navy)',
      margin: 0,
      lineHeight: 1
    }
  }, "MARIA ESTHER"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--color-blue)'
    }
  }, "Match desk \u2014 piloto manual"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail do operador",
    type: "email",
    defaultValue: D.operator.email,
    placeholder: "Preencha o seu e-mail"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onSignIn
  }, "Entrar"))));
}

/* ── Desk header ─────────────────────────────────────────── */
function DeskHeader({
  onSignOut
}) {
  const s = D.summary;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 24px',
      background: 'var(--color-navy)',
      borderBottom: '1px solid var(--color-navy-dark)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(105deg, rgba(41,170,225,0.15) 0%, transparent 45%, rgba(247,201,73,0.08) 100%)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--color-blue-light)'
    }
  }, "Liga Alphaville de T\xEAnis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      letterSpacing: '0.03em',
      color: '#fff',
      lineHeight: 1.05,
      paddingBottom: '0.6em'
    }
  }, "MARIA ESTHER MATCH DESK"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 13,
      color: 'rgba(255,255,255,0.75)'
    }
  }, s.total, " eleg\xEDveis \xB7 ", s.neverPlayed, " nunca jogaram \xB7 ", s.inactive14d, " com 14+ dias \xB7 ", s.contactedToday, " acionados hoje")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Atualizar fila"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: '#fff'
    },
    onClick: onSignOut
  }, "Sair")));
}

/* ── Queue ───────────────────────────────────────────────── */
function QueueRow({
  row,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect(row),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      borderBottom: '1px solid var(--color-gray-1)',
      padding: '16px',
      background: selected ? 'var(--color-blue-muted)' : 'transparent',
      borderLeft: `4px solid ${selected ? 'var(--color-blue)' : 'transparent'}`,
      fontFamily: 'var(--font-body)',
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      color: 'var(--color-navy)'
    }
  }, row.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 12,
      lineHeight: 1.5,
      color: 'var(--color-gray-4)'
    }
  }, row.category, " \xB7 ", row.inactivity, " \xB7 ", row.games, " jogos \xB7 ", row.court ? 'Tem quadra' : 'Sem quadra'), row.contactedAt ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--color-green-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--color-green)'
    },
    "aria-hidden": true
  }), " Acionado em ", row.contactedAt) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 12,
      color: 'var(--color-gray-3)'
    }
  }, "Nunca acionado no painel"));
}
function QueuePanel({
  selectedId,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRight: '1px solid var(--color-gray-1)',
      background: 'var(--color-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 16,
      borderBottom: '1px solid var(--color-gray-1)',
      background: 'rgba(243,245,248,0.8)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Buscar",
    type: "search",
    placeholder: "Nome do jogador"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Categoria",
    options: ['Todas categorias', 'A · 35+', 'B · Open', 'C · Open'],
    defaultValue: "Todas categorias"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--color-gray-4)'
    }
  }, D.queue.length, " jogador(es) na fila")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, D.queue.map(row => /*#__PURE__*/React.createElement(QueueRow, {
    key: row.id,
    row: row,
    selected: row.id === selectedId,
    onSelect: onSelect
  }))));
}

/* ── Recommendation card ─────────────────────────────────── */
function RecommendationCard({
  s,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      border: `1px solid ${selected ? 'var(--color-blue)' : 'var(--color-gray-1)'}`,
      background: selected ? 'var(--color-blue-muted)' : 'var(--color-white)',
      boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      lineHeight: 1,
      color: 'var(--color-navy)'
    }
  }, String(s.rank).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--color-navy)'
    }
  }, s.name), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '8px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, s.reasons.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      color: 'var(--color-gray-4)'
    }
  }, "\u2014 ", r.bold ? /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-navy)',
      fontWeight: 600
    }
  }, r.text) : r.text))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 12,
      color: 'var(--color-gray-3)'
    }
  }, "Score ", s.score))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: selected ? 'primary' : 'outline',
    onClick: onSelect
  }, selected ? 'Opção selecionada' : 'Selecionar esta opção')));
}

/* ── Player detail ───────────────────────────────────────── */
function PlayerDetail({
  player
}) {
  const [selectedRank, setSelectedRank] = React.useState(null);
  const suggestions = D.suggestions[player.id] || D.suggestions.r1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--color-navy-dark)',
      background: 'var(--color-navy)',
      padding: '20px 24px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.07,
      backgroundImage: 'repeating-linear-gradient(-12deg, transparent, transparent 8px, #fff 8px, #fff 9px)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      letterSpacing: '0.03em',
      paddingBottom: '0.06em'
    }
  }, player.name.toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '6px 0 0',
      fontSize: 13,
      color: 'rgba(255,255,255,0.8)'
    }
  }, player.category, " \xB7 ", player.inactivity, " \xB7 ", player.games, " jogos no semestre \xB7 ", player.court ? 'Tem quadra' : 'Sem quadra', " \xB7 ", player.availability)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      flex: 1,
      overflowY: 'auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Mensagem para o jogador eleg\xEDvel"), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: D.initialMessage,
    rows: 12,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--color-text)',
      padding: 12,
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--color-gray-2)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Abrir WhatsApp com o jogador"), /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    fullWidth: true
  }, "Confirmar que enviei a sugest\xE3o")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Recomenda\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(41,170,225,0.2)',
      background: 'var(--color-blue-muted)',
      padding: '8px 12px',
      fontSize: 14,
      color: 'var(--color-navy)'
    }
  }, "Essa rodada faz sentido para acionar o jogador? Avalie antes ou depois do envio."), suggestions.map(s => /*#__PURE__*/React.createElement(RecommendationCard, {
    key: s.rank,
    s: s,
    selected: selectedRank === s.rank,
    onSelect: () => setSelectedRank(s.rank)
  })))));
}

/* ── Empty state ─────────────────────────────────────────── */
function EmptyState() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      color: 'var(--color-navy)',
      letterSpacing: '0.02em'
    }
  }, "SELECIONE UM JOGADOR"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      maxWidth: 420,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--color-gray-4)'
    }
  }, "Escolha algu\xE9m na fila para revisar as 3 recomenda\xE7\xF5es, avaliar a rodada e enviar a sugest\xE3o pelo WhatsApp do jogador eleg\xEDvel."));
}

/* ── App ─────────────────────────────────────────────────── */
function MatchDeskApp() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  if (!signedIn) return /*#__PURE__*/React.createElement(LoginScreen, {
    onSignIn: () => setSignedIn(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...DESK_BG,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(DeskHeader, {
    onSignOut: () => {
      setSignedIn(false);
      setSelected(null);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(300px, 360px) 1fr',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(QueuePanel, {
    selectedId: selected?.id ?? null,
    onSelect: setSelected
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: 0,
      background: '#e8edf5'
    }
  }, selected ? /*#__PURE__*/React.createElement(PlayerDetail, {
    key: selected.id,
    player: selected
  }) : /*#__PURE__*/React.createElement(EmptyState, null))));
}
window.MatchDeskApp = MatchDeskApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maria-esther-panel/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/maria-esther-panel/data.js
try { (() => {
/* Fake operational data for the Maria Esther Match Desk UI kit.
   Mirrors the shape used by the real panel (PanelQueueRow / RankedSuggestion). */
window.MED_DATA = {
  operator: {
    name: 'Fernando',
    email: 'fernando@ligasdetenis.com.br'
  },
  summary: {
    total: 18,
    neverPlayed: 5,
    inactive14d: 7,
    contactedToday: 3
  },
  queue: [{
    id: 'r1',
    name: 'Rafael Moura',
    category: 'B · Open',
    games: 0,
    court: true,
    inactivity: 'Nunca jogou no semestre',
    availability: 'Disponibilidade alta',
    contactedAt: null
  }, {
    id: 'r2',
    name: 'Camila Restrepo',
    category: 'C · Open',
    games: 1,
    court: false,
    inactivity: '18 dias sem jogar',
    availability: 'Disponibilidade média',
    contactedAt: '07/06 · 14:20'
  }, {
    id: 'r3',
    name: 'Henrique Salles',
    category: 'A · 35+',
    games: 2,
    court: true,
    inactivity: '21 dias sem jogar',
    availability: 'Disponibilidade baixa',
    contactedAt: null
  }, {
    id: 'r4',
    name: 'Patrícia Lemos',
    category: 'B · Open',
    games: 0,
    court: false,
    inactivity: 'Nunca jogou no semestre',
    availability: 'Disponibilidade alta',
    contactedAt: null
  }, {
    id: 'r5',
    name: 'Diego Antunes',
    category: 'C · Open',
    games: 3,
    court: true,
    inactivity: '16 dias sem jogar',
    availability: 'Disponibilidade média',
    contactedAt: '06/06 · 09:05'
  }],
  suggestions: {
    r1: [{
      rank: 1,
      name: 'Bruno Carvalho',
      score: 92,
      reasons: [{
        text: 'Tem quadra em casa (Alphaville)',
        bold: true
      }, {
        text: 'Mesma categoria B · Open'
      }, {
        text: 'Jogou 2 partidas — disponível esta semana'
      }]
    }, {
      rank: 2,
      name: 'Tiago Nogueira',
      score: 81,
      reasons: [{
        text: 'Mesma categoria B · Open',
        bold: true
      }, {
        text: 'Sem quadra — Rafael tem quadra'
      }, {
        text: '12 dias sem jogar'
      }]
    }, {
      rank: 3,
      name: 'Marcelo Pires',
      score: 74,
      reasons: [{
        text: 'Categoria B · Open'
      }, {
        text: 'Disponibilidade média nas terças e quintas'
      }]
    }]
  },
  initialMessage: 'Oi, Rafael! Aqui é a Maria Esther, da Liga Alphaville de Tênis. 🎾\n\n' + 'Vi que você ainda não marcou sua primeira partida do semestre. Separei 3 jogadores da sua categoria que estão disponíveis essa semana.\n\n' + 'Quer que eu te apresente um deles pra marcar o jogo?'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/maria-esther-panel/data.js", error: String((e && e.message) || e) }); }

// ui_kits/onboarding/app.jsx
try { (() => {
/* Onboarding & Registration — UI kit screens.
   Player-facing surface: hero + multi-step "quero me inscrever" form.
   Composes DS primitives from the bundle. */
const {
  Button,
  Input,
  Select,
  OptionCard,
  Stepper,
  Badge,
  Card
} = window.LigasDeTNisDesignSystem_6dc710;
const STEPS = ['Dados', 'Interesse', 'Disponibilidade', 'Confirmar'];

// Signature court-grid texture — tileable two-tier line rhythm (fine grid + bold "court boxes").
function CourtGrid() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: ['linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)', 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', 'linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)'].join(','),
      backgroundSize: '120px 120px, 120px 120px, 30px 30px, 30px 30px'
    }
  });
}
function Hero({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-navy)',
      color: '#fff',
      padding: '64px 8%'
    }
  }, /*#__PURE__*/React.createElement(CourtGrid, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -120,
      top: -120,
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'rgba(41,170,225,0.22)',
      filter: 'blur(80px)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "energy",
    style: {
      background: 'var(--color-yellow)',
      color: 'var(--color-navy)'
    }
  }, "Inscri\xE7\xF5es abertas \xB7 1\xBA semestre"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(52px, 6vw, 88px)',
      letterSpacing: '0.02em',
      lineHeight: 1.0,
      paddingBottom: '0.12em'
    }
  }, "JOGUE UM CIRCUITO", /*#__PURE__*/React.createElement("br", null), "DE VERDADE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      maxWidth: 520,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.82)'
    }
  }, "Ranking de desafios e torneios no formato ATP, para tenistas amadores de Alphaville e regi\xE3o. Comunidade, competi\xE7\xE3o e networking de verdade."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    size: "lg",
    onClick: onStart
  }, "Quero me inscrever"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: 'rgba(255,255,255,0.4)',
      background: 'transparent',
      color: '#fff'
    }
  }, "Ver como funciona")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 44
    }
  }, [['10+', 'anos de liga'], ['1.000+', 'jogadores'], ['6', 'etapas por torneio']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      color: 'var(--color-yellow)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-official-lat-light-ligas-de-tenis.svg",
    alt: "Liga Alphaville de T\xEAnis",
    style: {
      width: '100%',
      maxWidth: 320,
      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))'
    }
  }))));
}
function FormShell({
  children,
  step
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-off-white)',
      padding: '64px 5%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: STEPS,
    current: step
  })), /*#__PURE__*/React.createElement(Card, null, children)));
}
function StepHeading({
  kicker,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.10em',
      color: 'var(--color-blue)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      letterSpacing: '0.02em',
      color: 'var(--color-navy)',
      lineHeight: 1
    }
  }, title));
}
function RegistrationFlow() {
  const [step, setStep] = React.useState(0);
  const [interest, setInterest] = React.useState('ambos');
  const [days, setDays] = React.useState(['ter', 'qui']);
  const toggleDay = d => setDays(cur => cur.includes(d) ? cur.filter(x => x !== d) : [...cur, d]);
  const back = () => setStep(s => Math.max(0, s - 1));
  const next = () => setStep(s => Math.min(STEPS.length - 1, s + 1));
  return /*#__PURE__*/React.createElement(FormShell, {
    step: step
  }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
    kicker: "Passo 1 de 4",
    title: "SEUS DADOS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome completo",
    placeholder: "Como voc\xEA assina"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "seu@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "(11) 90000-0000",
    hint: "Usamos para combinar suas partidas."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Onde voc\xEA joga",
    placeholder: "Selecione o condom\xEDnio / clube",
    options: ['Alphaville', 'Tamboré', 'Pinheiros', 'Morumbi', 'Outro']
  }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
    kicker: "Passo 2 de 4",
    title: "O QUE VOC\xCA QUER"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(OptionCard, {
    label: "Ranking",
    description: "Desafios o semestre todo",
    selected: interest === 'ranking',
    onSelect: () => setInterest('ranking')
  }), /*#__PURE__*/React.createElement(OptionCard, {
    label: "Torneio",
    description: "Etapas no formato ATP",
    selected: interest === 'torneio',
    onSelect: () => setInterest('torneio')
  }), /*#__PURE__*/React.createElement(OptionCard, {
    label: "Os dois",
    description: "Ranking + torneio",
    selected: interest === 'ambos',
    onSelect: () => setInterest('ambos')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Sua categoria",
    placeholder: "N\xE3o sei \u2014 me ajudem",
    options: ['A · avançado', 'B · intermediário', 'C · iniciante']
  }))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHeading, {
    kicker: "Passo 3 de 4",
    title: "DISPONIBILIDADE"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 14,
      color: 'var(--color-gray-4)'
    }
  }, "Quais dias voc\xEA costuma jogar? Pode marcar v\xE1rios."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10
    }
  }, [['seg', 'Seg'], ['ter', 'Ter'], ['qua', 'Qua'], ['qui', 'Qui'], ['sex', 'Sex'], ['sab', 'Sáb'], ['dom', 'Dom']].map(([k, l]) => /*#__PURE__*/React.createElement(OptionCard, {
    key: k,
    label: l,
    selected: days.includes(k),
    onSelect: () => toggleDay(k)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-yellow-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    },
    "aria-hidden": true
  }, "\uD83C\uDFBE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-navy)',
      fontWeight: 600
    }
  }, "Tem quadra em casa? Conte pra gente \u2014 facilita o match!"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      margin: '0 auto',
      borderRadius: '50%',
      background: 'var(--gradient-success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 30,
      boxShadow: 'var(--shadow-green)'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      letterSpacing: '0.02em',
      color: 'var(--color-navy)'
    }
  }, "BEM-VINDO \xC0 LIGA"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px auto 0',
      maxWidth: 380,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--color-gray-4)'
    }
  }, "Recebemos sua inscri\xE7\xE3o. Em instantes a Maria Esther vai te chamar no WhatsApp com os pr\xF3ximos passos e o pagamento."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Inscri\xE7\xE3o enviada"), /*#__PURE__*/React.createElement(Badge, {
    tone: "primary"
  }, interest === 'ambos' ? 'Ranking + Torneio' : interest === 'ranking' ? 'Ranking' : 'Torneio'))), step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: back,
    disabled: step === 0
  }, "Voltar"), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: next
  }, "Continuar") : /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    onClick: next
  }, "Finalizar inscri\xE7\xE3o")), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setStep(0)
  }, "Fazer outra inscri\xE7\xE3o")));
}
function OnboardingApp() {
  const formRef = React.useRef(null);
  const scrollToForm = () => {
    const el = formRef.current;
    if (el) window.scrollTo({
      top: el.offsetTop - 16,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onStart: scrollToForm
  }), /*#__PURE__*/React.createElement("div", {
    ref: formRef
  }, /*#__PURE__*/React.createElement(RegistrationFlow, null)));
}
window.OnboardingApp = OnboardingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/onboarding/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.Select = __ds_scope.Select;

})();
