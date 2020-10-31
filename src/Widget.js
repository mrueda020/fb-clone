import React from "react";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fes-la.facebook.com%2FNFL&tabs=timeline&width=340&height=4500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
