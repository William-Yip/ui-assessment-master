import { SCREEN, SPACING } from 'commonStyle';
import styled from "styled-components"

export const Wrapper = styled.div`
  background: white;
  border-radius: ${SPACING.xsm}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const SalesCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${SCREEN.sm}) {
    grid-template-columns: 1fr 1fr;
 `;

export const SalesSection = styled.div`
  padding: ${SPACING.md}px;
  border-bottom: 1px solid #EAEAEA;
  @media (min-width: ${SCREEN.sm}) {
    grid-column: span 2;
  }
`;

export const SalesIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.sm}px;
`;

export const SalesSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.sm}px;
  justify-content: space-between;
  margin-bottom: ${SPACING.lg}px;
`;

export const UploadSuccessSection = styled.div`
  padding: ${SPACING.md}px;
  border-right: 1px solid #EAEAEA;
`;

export const LinesSavedSection = styled.div`
  padding: ${SPACING.md}px;
`;

export const PercentageSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${SCREEN.sm}) {
    text-align: left;
  }
`;

export const PercentageWrapper = styled.span`
  color: #23ab54;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const LabelWrapper = styled.label`
  color: #9C9C9C;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 14px;
`;
