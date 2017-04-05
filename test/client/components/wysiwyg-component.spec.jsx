/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import WysiwygComponent from "src/components/wysiwyg-component";

describe("components/wysiwyg-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<WysiwygComponent />);
      expect(component).to.not.be.null;
    });

  });

});
