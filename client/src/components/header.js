import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>Read our blog</h1>
          <p>tier1 테스트 블로그 입니다.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
