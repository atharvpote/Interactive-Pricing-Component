import { useState } from "react";
import styled, { css } from "styled-components";
import { rem, hideVisually } from "polished";
import { icons } from "../assets";
import {
  defaultTheme,
  neutrals,
  primaryColors,
  typeScale,
  weightScale,
} from "../utils";

export function Pricing() {
  const normalMin = 8;
  const normalMax = 24;
  const discount = 25;
  const viewConstant = 6.25;
  const [price, setPrice] = useState(normalMin * 2);
  const [min, setMin] = useState(normalMin);
  const [max, setMax] = useState(normalMax);
  const [showYearlyPrice, setShowYearlyPrice] = useState(false);
  const [pricePerLabel, setPricePerLabel] = useState("month");
  const [view, setView] = useState(price * viewConstant);

  const switchPrice = (e) => {
    setShowYearlyPrice(!showYearlyPrice);

    if (e.target.checked) {
      const newMin = (normalMin - (normalMin * discount) / 100) * 12;
      const newMax = (normalMax - (normalMax * discount) / 100) * 12;

      setPrice(newMin * 2);
      setMin(newMin);
      setMax(newMax);
      setPricePerLabel("year");
    } else {
      setPrice(normalMin * 2);
      setMin(normalMin);
      setMax(normalMax);
      setPricePerLabel("month");
    }
  };

  const features = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports",
  ];

  return (
    <Article>
      <Section>
        <h2>{view}K PAGEVIEWS</h2>
        <RangeInput
          id="price"
          min={min}
          max={max}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            setView(e.target.value * viewConstant);
          }}
        />
        <Label htmlFor="price">
          <span>${price}.00</span> / {pricePerLabel}
        </Label>
        <SwitchContainer>
          <span>Monthly Billing</span>
          <ToggleLabel
            htmlFor="toggle"
            aria-label="yearly billing"
            showYearlyPrice={showYearlyPrice}
          />
          <ToggleSwitch
            type="checkbox"
            id="toggle"
            checked={showYearlyPrice}
            onChange={switchPrice}
          />
          <YearlyBilling>
            <span>Yearly Billing</span>
            <Discount>
              -25% <span>discount</span>
            </Discount>
          </YearlyBilling>
        </SwitchContainer>
      </Section>
      <Divider />
      <BottomSection>
        <FeaturesList>
          {features.map((feature, index) => (
            <li key={index}>
              <img src={icons.checkIcon} alt="" />
              <span>{feature}</span>
            </li>
          ))}
        </FeaturesList>
        <TrialButton>Start my trial</TrialButton>
      </BottomSection>
    </Article>
  );
}

const Article = styled.article`
  background-color: ${defaultTheme.pricingComponentBackground};
  text-align: center;
  margin-block: 3rem;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px ${neutrals.lightGrayishBlueV2};

  @media (min-width: 375px) {
    margin-inline: 1.25rem;
  }

  @media (min-width: 536px) {
    max-width: 536px;
    margin-inline: auto;
  }

  h2 {
    letter-spacing: 2px;
    font-size: ${typeScale.helperText};
    font-weight: ${weightScale.extraBold};
  }
`;

const Section = styled.div`
  padding: 2rem 1.5rem;

  @media (min-width: 536px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    place-items: center;
  }
`;

const RangeInput = styled.input.attrs({ type: "range" })`
  margin-block: 1rem;
  /* Custom input range have different margin block in chrome so had to adjust it with prefix */
  -webkit-margin-before: 1.75rem;
  -webkit-margin-after: 1.75rem;
  padding-inline: 1rem;
  appearance: none;
  width: 100%;
  background: transparent;

  @media (min-width: 536px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    height: ${rem("36px")};
    width: ${rem("36px")};
    border-radius: 50%;
    background-image: url(${icons.sliderIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${defaultTheme.sliderBackground};
    cursor: pointer;
    margin-top: ${rem("-14px")};
    transition: box-shadow 0.5s;

    &:active {
      box-shadow: 0 0 25px 1px ${defaultTheme.sliderBackground};
    }

    @media (hover: hover) {
      &:hover {
        box-shadow: 0 0 25px 1px ${defaultTheme.sliderBackground};
      }
    }
  }

  &::-moz-range-thumb {
    border: none;
    height: ${rem("36px")};
    width: ${rem("36px")};
    border-radius: 50%;
    background-image: url(${icons.sliderIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${defaultTheme.sliderBackground};
    cursor: pointer;

    &:active {
      box-shadow: 0 0 25px 1px ${defaultTheme.sliderBackground};
    }

    @media (hover: hover) {
      &:hover {
        box-shadow: 0 0 25px 1px ${defaultTheme.sliderBackground};
      }
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${rem("8.4px")};
    cursor: pointer;
    background-color: ${defaultTheme.emptySliderBar};
    border-radius: 10px;
  }

  &::-moz-range-track {
    width: 100%;
    height: ${rem("8.4px")};
    cursor: pointer;
    background-color: ${defaultTheme.emptySliderBar};
    border-radius: 10px;
  }

  &::-moz-range-progress {
    background-color: ${defaultTheme.fullSidebar};
    height: ${rem("8.4px")};
    border-radius: 10px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-block: 1rem;

  span {
    font-size: ${typeScale.heading4};
    font-weight: ${weightScale.extraBold};
    color: ${defaultTheme.textAndCtaBackground};
  }

  @media (min-width: 536px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const ToggleSwitch = styled.input.attrs({ type: "checkbox" })`
  ${hideVisually()}
`;

const ToggleLabel = styled.label`
  --scale: 0.25;
  cursor: pointer;
  text-indent: -9999px;
  width: calc(var(--scale) * 200px);
  height: calc(var(--scale) * 100px);
  background: ${neutrals.lightGrayishBlueV2};
  display: block;
  border-radius: calc(var(--scale) * 100px);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: calc(var(--scale) * 8px);
    left: calc(var(--scale) * 8px);
    width: calc(var(--scale) * 84px);
    height: calc(var(--scale) * 84px);
    background: ${neutrals.white};
    border-radius: calc(var(--scale) * 90px);
    transition: 0.3s;
  }

  ${({ showYearlyPrice }) => {
    if (showYearlyPrice)
      return css`
        background: ${primaryColors.strongCyan};

        &:after {
          left: calc(100% - calc(var(--scale) * 8px));
          transform: translateX(-100%);
        }
      `;
  }}

  &:active {
    &:after {
      width: calc(var(--scale) * 130px);
    }
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: ${typeScale.helperText};
  padding-block: 1rem;

  @media (min-width: 536px) {
    grid-column: 1/3;
    grid-row: 3/4;
  }
`;

const YearlyBilling = styled.span`
  display: flex;
  flex-flow: column wrap;
  gap: 0.125rem;

  @media (min-width: 350px) {
    display: initial;
    position: relative;
  }
`;

const Discount = styled.span`
  display: inline-block;
  color: ${defaultTheme.discountText};
  background-color: ${defaultTheme.discountBackground};
  font-size: ${typeScale.copyright};
  padding: 0.25rem 0.5rem;
  border-radius: 10px;

  @media (min-width: 350px) {
    position: absolute;
    top: ${rem("-2px")};
    left: 107.5%;
    margin-left: 0.1rem;
  }

  @media (min-width: 536px) {
    display: flex;
    gap: 0.25rem;
  }

  span {
    display: none;

    @media (min-width: 536px) {
      display: initial;
    }
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${neutrals.lightGrayishBlueV1};
`;

const BottomSection = styled(Section)`
  @media (min-width: 536px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media (min-width: 536px) {
    flex-basis: 50%;
  }

  li {
    margin-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    max-width: 325px;
    margin-inline: auto;

    @media (min-width: 536px) {
      justify-content: left;
      text-align: left;
      margin: 1rem;
    }

    img {
      flex-basis: 0.75rem;
    }
  }
`;

const TrialButton = styled.a`
  display: inline-block;
  background-color: ${defaultTheme.textAndCtaBackground};
  padding: 1rem 3rem;
  margin-block: 1rem;
  border-radius: 25px;
  color: ${defaultTheme.ctaText};
  cursor: pointer;
  max-width: 350px;
  margin-inline: auto;
`;
