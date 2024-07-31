import { SCREEN, SPACING } from 'commonStyle';
import styled from "styled-components";

export const UserIconWrapper = styled.div`
  border-radius: 8px;
  background-color: #F9CF03;
  width: 60px;
  height: 60px;
  color: black;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  @media (min-width: ${SCREEN.sm}) {
    width: 48px;
    height: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.md}px;
`;

export const Label = styled.div`
  color: #9C9C9C;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.7px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${SPACING.md}px;
  align-items: center;
`;

export const MailWrapper = styled.div`
  display: flex;
  gap: ${SPACING.xsm}px;
  flex-direction: column;
  color: #F9CF03;
  font-weight: 700;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #696969;
  display: flex;
  gap: ${SPACING.sm}px;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 400;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xsm}px;
  @media (min-width: ${SCREEN.sm}) {
    gap: ${SPACING.md}px;
    flex-direction: row;
    align-items: center;
  }
`;
