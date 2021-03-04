import {Box, Container} from "@material-ui/core";
import React from "react";

export default function noMatch() {
  return (
    <div>
      <Container fluid>
        <Box>
          <h1> 404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Box>
      </Container>
    </div>
  );
}
