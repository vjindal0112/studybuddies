import React from "react";
import { Wrapper, Logo, Texth1, Button } from "./styles";
import styled from "styled-components";

const TextBlock = styled.p`
  text-align: left;
`;

export default function Terms() {
  return (
    <>
      <div className="App" style={{ padding: "4px", "text-align": "center" }}>
        <Wrapper>
          <br />
          <Logo src="/StudyBuddyLogo.png" />
          <br />
          <Texth1>Terms of Use</Texth1>
          <br />
          <TextBlock>
            <i>
              These terms of use ("<b>Terms</b>") were last updated on April 1,
              2021
            </i>
          </TextBlock>
          <TextBlock>
            StudyBuddies' mission is to improve lives through community. We
            enable anyone anywhere to create community and togetherness. We need
            rules to keep our platform and services safe for you, us and our
            student and instructor community. These Terms apply to all your
            activities on the StudyBuddies website, the StudyBuddies mobile
            applications, our APIs and other related services (“<b>Services</b>
            ”).
          </TextBlock>
          <TextBlock>
            The StudyBuddies platform requires an account for use. We use utmost
            care when handling your credentials, but you are responsible for the
            safety of your username and password. You have complete
            responsibility for your account and everything that happens on your
            account, including for any harm or damage (to us or anyone else)
            caused by someone using your account without your permission.
          </TextBlock>
          <TextBlock>
            You may not perform any of the following actions while using our
            Services.
            <ul>
              <li>
                access, tamper with, or use non-public areas of the platform
                (including content storage), StudyBuddies' computer systems, or
                the technical delivery systems of StudyBuddies' service
                providers.
              </li>
              <li>
                disable, interfere with, or try to circumvent any of the
                features of the platforms related to security or probe, scan, or
                test the vulnerability of any of our systems.
              </li>
              <li>
                copy, modify, create a derivative work of, reverse engineer,
                reverse assemble, or otherwise attempt to discover any source
                code of or content on the StudyBuddies platform or Services.
              </li>
              <li>
                access or search or attempt to access or search our platform by
                any means (automated or otherwise) other than through our
                currently available search functionalities that are provided via
                our website, mobile apps, or API (and only pursuant to those API
                terms and conditions). You may not scrape, spider, use a robot,
                or use other automated means of any kind to access the Services.
              </li>
              <li>
                in any way use the Services to send altered, deceptive, or false
                source-identifying information (such as sending email
                communications falsely appearing as StudyBuddies); or interfere
                with, or disrupt, (or attempt to do so), the access of any user,
                host, or network, including, without limitation, sending a
                virus, overloading, flooding, spamming, or mail-bombing the
                platforms or services, or in any other manner interfering with
                or creating an undue burden on the Services.
              </li>
            </ul>
          </TextBlock>
          <Button to="/">Back</Button>
          <br />
          <br />
          <br />
        </Wrapper>
      </div>
    </>
  );
}
