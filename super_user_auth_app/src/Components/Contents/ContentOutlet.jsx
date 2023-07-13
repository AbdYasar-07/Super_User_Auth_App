import React from "react";
import ContentHeader from "../Contents/ContentHeader";
import ContentBody from "../Contents/ContentBody";

const ContentOutlet = () => {
  return (
    <div>
      <ContentHeader
        title="Users"
        description="Open a user to add them to a group or assign them to a role"
      />
      <ContentBody />
    </div>
  );
};

export default ContentOutlet;
