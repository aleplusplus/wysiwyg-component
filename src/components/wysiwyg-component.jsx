import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/wysiwyg-component.css";
import messages from "../lang/default-messages";

export default class WysiwygComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

WysiwygComponent.displayName = "WysiwygComponent";

WysiwygComponent.propTypes = {};

WysiwygComponent.defaultProps = {};
