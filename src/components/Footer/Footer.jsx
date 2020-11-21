import React from "react";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.jpg";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f4285;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4;
  color: #f8f1ab;
  margin: 5;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #f8f1ab;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #f8f1ab;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #f8f1ab;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #f8f1ab;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  text-align: center;
  padding-bottom: 5px;
  color: #f8f1ab;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.topText}>
          <MotivationalText>
            Lorem ipsum dolor sit amet consectetur.
          </MotivationalText>
          <MotivationalText>
            Vero harum nulla deleniti iure animi cumque laborum ad temporibus.
          </MotivationalText>
        </div>

        <div className={styles.button}>
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Donate
          </Button>
        </div>

        <AccessibilityContainer>
          <PrivacyContainer>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Contact</Link>
          </PrivacyContainer>
          <SocialContainer>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
          </SocialContainer>
        </AccessibilityContainer>
        <RightsReserved>
          &copy; 2020 Chronic-UTI Global Support | All rights reserved
        </RightsReserved>
      </FooterContainer>
    </>
  );
};

export default Footer;
