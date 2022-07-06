import styled from "styled-components";
import { backgrounds } from "../assets";
import { defaultTheme, typeScale } from "../utils";

export function Header() {
  return (
    <StyledHeader>
      <h1>Simple, traffic based pricing</h1>
      <p>Sign up for our 30 days trial.</p>
      <p>No credit cards required.</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: url(${backgrounds.circlePattern}) no-repeat center/contain;
  text-align: center;
  padding-block: 2rem;
  margin-block: 2.5rem;

  h1 {
    font-size: ${typeScale.heading5};
    color: ${defaultTheme.textAndCtaBackground};
  }

  p {
    margin-bottom: 0.5rem;
    font-size: ${typeScale.paragraph};
  }
`;
