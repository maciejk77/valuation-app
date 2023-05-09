/* eslint-disable max-statements */
import { add, format } from 'date-fns';
import React from 'react';
import { Button } from '../../components/button';
import { Chip } from '../../components/chip';
import RowContainer from '../../components/row-container';
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
  Inset,
  Flex,
} from './style';

const account = {
  uid: '65156cdc-5cfd-4b34-b626-49c83569f35e',
  deleted: false,
  dateCreated: '2020-12-03T08:55:33.421Z',
  currency: 'GBP',
  name: '15 Temple Way',
  bankName: 'Residential',
  type: 'properties',
  subType: 'residential',
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: '2017-09-03',
  recentValuation: { amount: 310000, status: 'good' },
  associatedMortgages: [
    {
      name: 'HSBC Repayment Mortgage',
      uid: 'fb463121-b51a-490d-9f19-d2ea76f05e25',
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: 'BS1 2AA',
  lastUpdate: '2020-12-01T08:55:33.421Z',
  updateAfterDays: 30,
};

const Detail = ({}) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  // move these methods to helper and import here
  const sincePurchase =
    account.recentValuation.amount - account.originalPurchasePrice;

  const sincePurchasePercentage =
    (sincePurchase / account.originalPurchasePrice) * 100;

  const numberOfYearsSincePurchase =
    // 'quick and dirty' method should refactor to more accurate based on Date object/s
    account.lastUpdate.split('-')[0] -
    account.originalPurchasePriceDate.split('-')[0];

  const annualAppreciation =
    sincePurchasePercentage / numberOfYearsSincePurchase;

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${format(lastUpdate, 'do MMM yyyy')}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                'do MMM yyyy'
              )}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{account.name}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.bankName}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.postcode}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>

      {/* Valuation changes component added here */}
      <AccountSection>
        <AccountLabel>Valuation changes</AccountLabel>
        <RowContainer>
          <AccountList maxWidth>
            <AccountListItem>
              <InfoText>
                <Flex>
                  <InfoText>Purchased for&nbsp;</InfoText>
                  <InfoText bold>
                    {new Intl.NumberFormat('en-GB', {
                      style: 'currency',
                      currency: 'GBP',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(Math.abs(account.originalPurchasePrice))}
                  </InfoText>
                  <InfoText>&nbsp;in July 2005</InfoText>
                </Flex>
              </InfoText>
            </AccountListItem>
            <AccountListItem spaceBetween>
              <InfoText>Since purchase</InfoText>
              <Chip>
                <InfoText>
                  {`${new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(
                    Math.abs(sincePurchase)
                  )} (${sincePurchasePercentage}%)`}
                </InfoText>
              </Chip>
            </AccountListItem>
            <AccountListItem spaceBetween>
              <InfoText>Annual appreciation</InfoText>
              <Chip>
                <InfoText>{annualAppreciation}%</InfoText>
              </Chip>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      {/* ^^ Valuation changes component added here ^^ */}

      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert('You have navigated to the mortgage page')}
          >
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                  }).format(
                    Math.abs(account.associatedMortgages[0].currentBalance)
                  )}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>{account.associatedMortgages[0].name}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert('You have navigated to the edit account page')}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
