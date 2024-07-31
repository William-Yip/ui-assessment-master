import styled from 'styled-components'
import { SPACING, SCREEN } from '../../commonStyle';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: ${SPACING.md}px ${SPACING.lg}px;
  margin: 0 auto;
`;

export const AccountOverviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${SPACING.md}px;
  margin-bottom: ${SPACING.xlg}px;
  flex-direction: column;
  @media (min-width: ${SCREEN.sm}) {
    flex-direction: row;
  }
`;