import React from "react";
import { Wrapper, Logo, Texth1, List, Button } from "./styles";

export default function PrivacyPol() {
  return (
    <>
      <div className="App" style={{ padding: "4px", "text-align": "center" }}>
        <Wrapper>
          <br />
          <Logo src="/StudyBuddyLogo.png" />
          <br />
          <Texth1>What happens to the data?</Texth1>
          <br />
          <ol>
            <List>
              StudyBuddies will not sell any personally identifiable data
              collected from the students of any accredited college or
              university.
            </List>
            <br />
            <List>
              StudyBuddies will not give an accredited college or university
              student's contact information to another party outside that
              accredited college or university unless the student has consented
              to do so.
            </List>
            <br />
            <List>
              StudyBuddies has full ownership of the data that it collects from
              students of any accredited college or university subject to the
              conditions above.
            </List>
          </ol>
          <br />

          <br />
          <Button to="/">Back</Button>
          <br />
        </Wrapper>
      </div>
    </>
  );
}
