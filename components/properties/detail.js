/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React from "react";
import { add, format } from "date-fns";
import { Button } from "../button";

import {
  AccountHeadline,
  AccountLabel,
  AccountSection,
  AccountList,
  InfoText,
  Inset,
  RowContainer,
} from "./style";

const Detail = ({}) => {
  const account = {
    uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
    deleted: false,
    dateCreated: "2020-12-03T08:55:33.421Z",
    currency: "GBP",
    name: "15 Temple Way",
    bankName: "Residential",
    type: "properties",
    subType: "residential",
    originalPurchasePrice: 250000,
    originalPurchasePriceDate: "2017-12-03",
    recentValuation: { amount: 310000, status: "good" },
    associatedMortgages: [
      {
        name: "HSBC Repayment Mortgage",
        uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
        currentBalance: -175000,
      },
    ],
    canBeManaged: false,
    postcode: "BS1 2AA",
    lastUpdate: "2020-12-01T08:55:33.421Z",
    updateAfterDays: 30,
  };

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {`£${account.recentValuation.amount}`}
        </AccountHeadline>
        <AccountList>
          <InfoText>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </InfoText>
          <InfoText>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </InfoText>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <InfoText>{account.name}</InfoText>
            <InfoText>{account.bankName}</InfoText>
            <InfoText>{account.postcode}</InfoText>
          </AccountList>
        </RowContainer>
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <InfoText>{`£${Math.abs(
                account.associatedMortgages[0].currentBalance
              )}`}</InfoText>
              <InfoText>{account.associatedMortgages[0].name}</InfoText>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button>Edit account</Button>
    </Inset>
  );
};

Detail.propTypes = {
  account: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    associatedMortgages: PropTypes.array.isRequired,
    yearlyAppreciation: PropTypes.number,
    type: PropTypes.string.isRequired,
    closed: PropTypes.string,
    linkWithMortgages: PropTypes.bool,
    name: PropTypes.string.isRequired,
    bankName: PropTypes.string,
    recentValuation: PropTypes.object,
    notes: PropTypes.string,
    postcode: PropTypes.string,
    providerLastUpdated: PropTypes.string,
    auto: PropTypes.bool,
    originalPurchasePrice: PropTypes.number,
    originalPurchasePriceDate: PropTypes.string,
  }),
};

export default Detail;
