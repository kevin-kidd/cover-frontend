import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../stores/Home";
import { AdvancedButton } from "./AdvancedButton";
import { BorrowCard } from "./BorrowCard"
import { CollateralDenomBox } from "./CollateralDenomBox";
import { PrincipalDenomBox } from "./PrincipalDenomBox"


export const NFTLendingListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.selectedListings);
  const setSelectedListings = useHomeStore((state) => state.setSelectedListings);

  useEffect(() => {
    setTimeout(() => {
      setSelectedListings(
        [
          {
            borrowing: {
              type: "snip20",
              amount: 300,
              name: "sSCRT",
              estimatedValue: 600
            },
            collateral: {
              type: "snip721",
              name: "Anons",
              icon: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret1hu0nwzzxlrwks7pn0rslmgsk7kcx0s0kgztq22_icon_1639929050903.jpg",
              image: "https://arweave.net/9G763icUQ3ebD-enkmJTz-lyqDBJ-wNMysbOrdiSITE",
              amount: 2
            },
            duration: "1 month",
            returnPercentage: 6
          },
          {
            borrowing: {
              type: "snip20",
              amount: 500,
              name: "sXMR",
              estimatedValue: 600
            },
            collateral: {
              type: "snip721",
              name: "Secret Punks",
              icon: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret1fuup0knavkpdmc6qt4fwz6pqlujaacx9ddpp0y_icon_1639930855744.png",
              image: "https://arweave.net/6MSkO-nwS9C8EhEkDr9YO17lfG7wK3Sid64ynYmyiRI/punk0001.png",
              amount: 2
            },
            duration: "1 month",
            returnPercentage: 5
          },
          {
            borrowing: {
              type: "snip20",
              amount: 400,
              name: "sUSDT",
              estimatedValue: 600
            },
            collateral: {
              type: "snip721",
              name: "Mystic Skulls",
              icon: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret1nnt3t7ms82vf86jwq88zvwvzvm2mkhxxtevzut_icon_1639955549851.png",
              image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTAuNSAyNCAyNCIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBzdHJva2U9IiMxYjMwNDEiIGQ9Ik0wIDBoMSIgLz48cGF0aCBzdHJva2U9IiMxMTIyMzEiIGQ9Ik0xIDBoMSIgLz48cGF0aCBzdHJva2U9IiMzMTQ1NTQiIGQ9Ik0yIDBoMSIgLz48cGF0aCBzdHJva2U9IiMyMDM3NGIiIGQ9Ik0zIDBoMSIgLz48cGF0aCBzdHJva2U9IiMzNDQ5NWEiIGQ9Ik00IDBoMSIgLz48cGF0aCBzdHJva2U9IiMxZDMxNDIiIGQ9Ik01IDBoMU0yMSAxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMjc0MTU2IiBkPSJNNiAwaDFNMTggMGgxTTIyIDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzI0YjVlIiBkPSJNNyAwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMmI0NzVkIiBkPSJNOCAwaDFNMjEgM2gxTTE4IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1MjY2IiBkPSJNOSAwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzI0ZDYzIiBkPSJNMTAgMGgxTTcgMWgxTTAgMTVoMSIgLz48cGF0aCBzdHJva2U9IiMzOTU0NjgiIGQ9Ik0xMSAwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzE0ZTY1IiBkPSJNMTIgMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzI3NDA1NCIgZD0iTTEzIDBoMSIgLz48cGF0aCBzdHJva2U9IiMzOTUzNjciIGQ9Ik0xNCAwaDFNMjIgNWgxTTAgMTRoMSIgLz48cGF0aCBzdHJva2U9IiMyYzQ5NWYiIGQ9Ik0xNSAwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzg1MDY0IiBkPSJNMTYgMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzIzMzk0YyIgZD0iTTE3IDBoMSIgLz48cGF0aCBzdHJva2U9IiMzMDQ3NWIiIGQ9Ik0xOSAwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMWUzODRjIiBkPSJNMjAgMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzMxNDY1NyIgZD0iTTIxIDBoMU0yIDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMWYzNzQ4IiBkPSJNMjIgMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzMxNDM1MiIgZD0iTTIzIDBoMSIgLz48cGF0aCBzdHJva2U9IiMzMDQyNTEiIGQ9Ik0wIDFoMSIgLz48cGF0aCBzdHJva2U9IiMzMTQzNTMiIGQ9Ik0xIDFoMSIgLz48cGF0aCBzdHJva2U9IiMxYzM2NDkiIGQ9Ik0yIDFoMSIgLz48cGF0aCBzdHJva2U9IiMyZjQ2NTgiIGQ9Ik0zIDFoMSIgLz48cGF0aCBzdHJva2U9IiMyMzNkNTMiIGQ9Ik00IDFoMSIgLz48cGF0aCBzdHJva2U9IiMzNzRmNjEiIGQ9Ik01IDFoMSIgLz48cGF0aCBzdHJva2U9IiMzODUwNjMiIGQ9Ik02IDFoMU0yMCAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzNiNTU2YyIgZD0iTTggMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzJmNDk1ZSIgZD0iTTkgMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQwNWE3MCIgZD0iTTEwIDFoMSIgLz48cGF0aCBzdHJva2U9IiMzMTRjNjEiIGQ9Ik0xMSAxaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDA1YTcxIiBkPSJNMTIgMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQwNWI3MSIgZD0iTTEzIDFoMSIgLz48cGF0aCBzdHJva2U9IiMzNjU1NmMiIGQ9Ik0xNCAxaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2I1ODZlIiBkPSJNMTUgMWgxTTE1IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzA0ZjY2IiBkPSJNMTYgMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzNiNTQ2OCIgZD0iTTE3IDFoMSIgLz48cGF0aCBzdHJva2U9IiMzOTUwNjMiIGQ9Ik0xOCAxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMmE0NDU5IiBkPSJNMTkgMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMxNDg1YiIgZD0iTTIwIDFoMSIgLz48cGF0aCBzdHJva2U9IiMzMTQ2NTYiIGQ9Ik0yMiAxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMTYyODM3IiBkPSJNMjMgMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNDM1NSIgZD0iTTAgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzIwMzk0YyIgZD0iTTEgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzIxMzU0NiIgZD0iTTIgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzJkNDc1YSIgZD0iTTMgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzM1NGU2MiIgZD0iTTQgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzJlNGI2MSIgZD0iTTUgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzNiNTQ2OSIgZD0iTTYgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzMxNGE2MCIgZD0iTTcgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzM5NTg3MCIgZD0iTTggMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQzNjA3NyIgZD0iTTkgMmgxTTcgM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzNlNWU3OCIgZD0iTTEwIDJoMSIgLz48cGF0aCBzdHJva2U9IiMzZTVmNzgiIGQ9Ik0xMSAyaDFNMiAxM2gxTTEyIDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDU2MzdiIiBkPSJNMTIgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQxNWY3YSIgZD0iTTEzIDJoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU3NmUiIGQ9Ik0xNCAyaDFNMTEgMjJoMSIgLz48cGF0aCBzdHJva2U9IiM0MTVlNzciIGQ9Ik0xNSAyaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2Y1ZDczIiBkPSJNMTYgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzM3NTU2ZCIgZD0iTTE3IDJoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU0NmEiIGQ9Ik0xOCAyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMjg0MDU0IiBkPSJNMTkgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzJkNDg1YyIgZD0iTTIwIDJoMSIgLz48cGF0aCBzdHJva2U9IiMzMjRiNWQiIGQ9Ik0yMSAyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMjMzYzUwIiBkPSJNMjIgMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzFkMzY0OSIgZD0iTTIzIDJoMSIgLz48cGF0aCBzdHJva2U9IiMyNTNkNGYiIGQ9Ik0wIDNoMSIgLz48cGF0aCBzdHJva2U9IiMzMDQ3NTkiIGQ9Ik0xIDNoMSIgLz48cGF0aCBzdHJva2U9IiMyYjQ0NTgiIGQ9Ik0yIDNoMSIgLz48cGF0aCBzdHJva2U9IiMzNzUwNjMiIGQ9Ik0zIDNoMSIgLz48cGF0aCBzdHJva2U9IiMyYTQzNTYiIGQ9Ik00IDNoMSIgLz48cGF0aCBzdHJva2U9IiMzNDUyNmEiIGQ9Ik01IDNoMSIgLz48cGF0aCBzdHJva2U9IiM0MDVjNzIiIGQ9Ik02IDNoMU0xMiAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzQ5Njg3ZiIgZD0iTTggM2gxTTE3IDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTI2Zjg4IiBkPSJNOSAzaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGQ2Yzg1IiBkPSJNMTAgM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzRlNmM4NiIgZD0iTTExIDNoMSIgLz48cGF0aCBzdHJva2U9IiM1MDcwODkiIGQ9Ik0xMiAzaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGY2ZTg3IiBkPSJNMTMgM2gyTTYgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ3Njc3ZiIgZD0iTTE1IDNoMU0zIDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjM2I1OTcwIiBkPSJNMTYgM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzNlNWQ3NyIgZD0iTTE3IDNoMSIgLz48cGF0aCBzdHJva2U9IiM0MTVkNzMiIGQ9Ik0xOCAzaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2Q1NzZkIiBkPSJNMTkgM2gxTTEgOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzM3NTM2NyIgZD0iTTIwIDNoMSIgLz48cGF0aCBzdHJva2U9IiMzNjRkNjAiIGQ9Ik0yMiAzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzQ0OTViIiBkPSJNMjMgM2gxTTAgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzFiMmY0MCIgZD0iTTAgNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzI1M2U1NCIgZD0iTTEgNGgxTTIzIDRoMSIgLz48cGF0aCBzdHJva2U9IiMzNTRmNjIiIGQ9Ik0yIDRoMU01IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1MjY3IiBkPSJNMyA0aDFNMjIgMTloMSIgLz48cGF0aCBzdHJva2U9IiMzODU1NmMiIGQ9Ik00IDRoMU0yIDEwaDFNMTQgMjJoMSIgLz48cGF0aCBzdHJva2U9IiM0MTVlNzUiIGQ9Ik01IDRoMSIgLz48cGF0aCBzdHJva2U9IiMzYjU4NmYiIGQ9Ik02IDRoMSIgLz48cGF0aCBzdHJva2U9IiM0ZTZlODciIGQ9Ik03IDRoMSIgLz48cGF0aCBzdHJva2U9IiM1Mzc0OGMiIGQ9Ik04IDRoMSIgLz48cGF0aCBzdHJva2U9IiM1MDcyOGIiIGQ9Ik05IDRoMSIgLz48cGF0aCBzdHJva2U9IiM0OTZhODUiIGQ9Ik0xMCA0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTg3Yjk1IiBkPSJNMTEgNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzRjNmU4YSIgZD0iTTEyIDRoMU0yMCA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTg3OTk1IiBkPSJNMTMgNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzUyNzQ4ZiIgZD0iTTE0IDRoMU01IDhoMSIgLz48cGF0aCBzdHJva2U9IiM0ZTZmODkiIGQ9Ik0xNSA0aDFNMTkgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM1MTcwODkiIGQ9Ik0xNiA0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDc2NzgwIiBkPSJNMTcgNGgxTTIwIDdoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU4NzAiIGQ9Ik0xOCA0aDFNMyA2aDEiIC8+PHBhdGggc3Ryb2tlPSIjM2M1YTcyIiBkPSJNMTkgNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzM0NTM2YiIgZD0iTTIwIDRoMSIgLz48cGF0aCBzdHJva2U9IiMzODUzNjgiIGQ9Ik0yMSA0aDEiIC8+PHBhdGggc3Ryb2tlPSIjMjUzYjRlIiBkPSJNMjIgNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzM2NGU2MCIgZD0iTTEgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzJkNDk2MCIgZD0iTTIgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNGE1ZCIgZD0iTTMgNWgxTTIxIDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDI1ZTc0IiBkPSJNNCA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjM2Y1ZjdhIiBkPSJNNSA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGU2ZTg5IiBkPSJNNyA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGM2ZTg4IiBkPSJNOCA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTk3Yzk3IiBkPSJNOSA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTg3ZDk4IiBkPSJNMTAgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzVjODA5ZCIgZD0iTTExIDVoMSIgLz48cGF0aCBzdHJva2U9IiM1YTdmOWMiIGQ9Ik0xMiA1aDFNNiA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNWE3ZTliIiBkPSJNMTMgNWgyTTUgMTFoMSIgLz48cGF0aCBzdHJva2U9IiM0ZTcyOGMiIGQ9Ik0xNSA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTM3NDkwIiBkPSJNMTYgNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzU2Nzc5MSIgZD0iTTE3IDVoMSIgLz48cGF0aCBzdHJva2U9IiM0ODY5ODQiIGQ9Ik0xOCA1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDU2NDdiIiBkPSJNMTkgNWgxTTMgMTZoMSIgLz48cGF0aCBzdHJva2U9IiMzNjUxNjciIGQ9Ik0yMCA1aDFNMiAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzM3NTU2YyIgZD0iTTIxIDVoMU0yMyAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzJkNDc1ZCIgZD0iTTIzIDVoMSIgLz48cGF0aCBzdHJva2U9IiMyYzQ0NTkiIGQ9Ik0wIDZoMSIgLz48cGF0aCBzdHJva2U9IiMyOTQwNTIiIGQ9Ik0xIDZoMSIgLz48cGF0aCBzdHJva2U9IiMzMjRmNjciIGQ9Ik0yIDZoMSIgLz48cGF0aCBzdHJva2U9IiM0NTYyN2EiIGQ9Ik00IDZoMU00IDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGM2Yzg1IiBkPSJNNSA2aDFNNSAxOGgxTTEyIDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDg2OTgzIiBkPSJNNiA2aDFNNiAxOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzU1Nzc5MyIgZD0iTTcgNmgxTTYgN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzU5N2U5YSIgZD0iTTggNmgxTTUgMTNoMSIgLz48cGF0aCBzdHJva2U9IiM1YzgxOWUiIGQ9Ik05IDZoMU02IDloMU0xOCA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjE4N2E0IiBkPSJNMTAgNmgxTTEwIDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNWU4NGE0IiBkPSJNMTEgNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzY0ODlhNyIgZD0iTTEyIDZoMSIgLz48cGF0aCBzdHJva2U9IiM1ZDg0YTEiIGQ9Ik0xMyA2aDFNMTEgMThoMSIgLz48cGF0aCBzdHJva2U9IiM2MDg2YTQiIGQ9Ik0xNCA2aDFNNiAxM2gxTTE4IDEzaDEiIC8+PHBhdGggc3Ryb2tlPSIjNWY4NGEyIiBkPSJNMTUgNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzU5N2Q5YSIgZD0iTTE2IDZoMSIgLz48cGF0aCBzdHJva2U9IiM1Njc4OTQiIGQ9Ik0xNyA2aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDg2OTgyIiBkPSJNMTggNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzRhNjk4MiIgZD0iTTE5IDZoMU0xOCAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQxNjE3YSIgZD0iTTIwIDZoMU0yMiAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQyNWQ3NCIgZD0iTTIxIDZoMSIgLz48cGF0aCBzdHJva2U9IiMzMjUwNjYiIGQ9Ik0yMiA2aDFNMSAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzI4M2Y1MiIgZD0iTTIzIDZoMSIgLz48cGF0aCBzdHJva2U9IiMzNzRmNjIiIGQ9Ik0wIDdoMSIgLz48cGF0aCBzdHJva2U9IiMzMjRlNjUiIGQ9Ik0xIDdoMSIgLz48cGF0aCBzdHJva2U9IiMzYzU5NzAiIGQ9Ik0yIDdoMSIgLz48cGF0aCBzdHJva2U9IiM0MzYxNzkiIGQ9Ik0zIDdoMSIgLz48cGF0aCBzdHJva2U9IiMzZTVkNzYiIGQ9Ik00IDdoMSIgLz48cGF0aCBzdHJva2U9IiM1MjczOGQiIGQ9Ik01IDdoMSIgLz48cGF0aCBzdHJva2U9IiM1ZDgyOWUiIGQ9Ik03IDdoMSIgLz48cGF0aCBzdHJva2U9IiM1Zjg1YTIiIGQ9Ik04IDdoMSIgLz48cGF0aCBzdHJva2U9IiM2MDg2YTYiIGQ9Ik05IDdoMSIgLz48cGF0aCBzdHJva2U9IiM2NjhlYWUiIGQ9Ik0xMCA3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjg5MWIxIiBkPSJNMTEgN2gxTTkgOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzY3OTBiMCIgZD0iTTEyIDdoMU0xNyAxM2gxTTE1IDE2aDFNMTIgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM2NzkwYjEiIGQ9Ik0xMyA3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjY4ZWFkIiBkPSJNMTQgN2gxTTggMTZoMU0xMCAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzYzOGJhOSIgZD0iTTE1IDdoMSIgLz48cGF0aCBzdHJva2U9IiM1YTgwOWQiIGQ9Ik0xNiA3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTg3ZTliIiBkPSJNMTcgN2gxTTE5IDEzaDFNMTcgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM1Mjc2OTEiIGQ9Ik0xOCA3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGE2ZDg5IiBkPSJNMTkgN2gxTTkgMjBoMSIgLz48cGF0aCBzdHJva2U9IiMzODU0NmIiIGQ9Ik0yMSA3aDFNMyAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzNlNWE3MCIgZD0iTTIyIDdoMU0yMiAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzJmNGI2MiIgZD0iTTIzIDdoMSIgLz48cGF0aCBzdHJva2U9IiMyMzNhNGUiIGQ9Ik0wIDhoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU5NzAiIGQ9Ik0yIDhoMSIgLz48cGF0aCBzdHJva2U9IiMzZjYwN2EiIGQ9Ik0zIDhoMSIgLz48cGF0aCBzdHJva2U9IiM0YzZkODYiIGQ9Ik00IDhoMSIgLz48cGF0aCBzdHJva2U9IiM1YTdmOWQiIGQ9Ik03IDhoMSIgLz48cGF0aCBzdHJva2U9IiM2NThjYWEiIGQ9Ik04IDhoMSIgLz48cGF0aCBzdHJva2U9IiM2ZDk2YjciIGQ9Ik0xMCA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNzA5YWJiIiBkPSJNMTEgOGgxTTEzIDhoMSIgLz48cGF0aCBzdHJva2U9IiM2ZDk5YmEiIGQ9Ik0xMiA4aDFNMTUgOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzZlOThiOCIgZD0iTTE0IDhoMSIgLz48cGF0aCBzdHJva2U9IiM2OTkyYjIiIGQ9Ik0xNSA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjU4ZGFiIiBkPSJNMTYgOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzVlODRhMiIgZD0iTTE3IDhoMU02IDE0aDFNMTcgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM1ODdjOTkiIGQ9Ik0xOCA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGI2ZDg4IiBkPSJNMTkgOGgxTTEyIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGQ2Yzg3IiBkPSJNMjAgOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzQxNjI3YiIgZD0iTTIxIDhoMSIgLz48cGF0aCBzdHJva2U9IiM0MDVkNzQiIGQ9Ik0yMiA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjMzE0ZjY2IiBkPSJNMjMgOGgxTTE2IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1MjY1IiBkPSJNMCA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjMzU1MjZhIiBkPSJNMSA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDA1ZTc2IiBkPSJNMiA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDY2NjgwIiBkPSJNMyA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGQ2ZjhhIiBkPSJNNCA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGY3MThlIiBkPSJNNSA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjM4YmFhIiBkPSJNNyA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjc5MWIyIiBkPSJNOCA5aDFNOCAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzZkOTdiYSIgZD0iTTkgOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzczOWVjMCIgZD0iTTEwIDloMSIgLz48cGF0aCBzdHJva2U9IiM3NWExYzQiIGQ9Ik0xMSA5aDFNMTMgOWgxTTkgMTFoMU0xNSAxMWgxTTkgMTNoMU0xNSAxM2gxTTExIDE1aDFNMTMgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM3N2EzYzYiIGQ9Ik0xMiA5aDFNOSAxMmgxTTE1IDEyaDFNMTIgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM3MjllYzAiIGQ9Ik0xNCA5aDFNOSAxMGgxTTE1IDEwaDFNOSAxNGgxTTE1IDE0aDFNMTAgMTVoMU0xNCAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzY4OTJiMSIgZD0iTTE2IDloMSIgLz48cGF0aCBzdHJva2U9IiM2MDg2YTUiIGQ9Ik0xNyA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTU3ODk1IiBkPSJNMTkgOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ1NjU3ZiIgZD0iTTIxIDloMSIgLz48cGF0aCBzdHJva2U9IiMzYzVjNzUiIGQ9Ik0yMiA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjM2M1NzZjIiBkPSJNMjMgOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNGI2MiIgZD0iTTAgMTBoMSIgLz48cGF0aCBzdHJva2U9IiMzZDVhNzAiIGQ9Ik0xIDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDc2OTgzIiBkPSJNMyAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzUzNzQ4ZiIgZD0iTTQgMTBoMSIgLz48cGF0aCBzdHJva2U9IiM1OTdjOTkiIGQ9Ik01IDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNWY4NWEzIiBkPSJNNiAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzY3OGZhZiIgZD0iTTcgMTBoMU0xNCAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzZiOTViNyIgZD0iTTggMTBoMSIgLz48cGF0aCBzdHJva2U9IiM3N2E0YzciIGQ9Ik0xMCAxMGgxTTE0IDEwaDFNMTAgMTRoMSIgLz48cGF0aCBzdHJva2U9IiM3Y2E4Y2IiIGQ9Ik0xMSAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzdjYWFjZCIgZD0iTTEyIDEwaDFNMTAgMTJoMU0xMiAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzdhYThjYiIgZD0iTTEzIDEwaDFNMTQgMTFoMU0xMCAxM2gxTTExIDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNmI5NmI2IiBkPSJNMTYgMTBoMU0xNiAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzY1OGRhZCIgZD0iTTE3IDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNWU4NGEzIiBkPSJNMTggMTBoMSIgLz48cGF0aCBzdHJva2U9IiM1NTdhOTgiIGQ9Ik0xOSAxMGgxTTggMThoMU0xNCAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzUxNzM4ZSIgZD0iTTIwIDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDk2YTg0IiBkPSJNMjEgMTBoMSIgLz48cGF0aCBzdHJva2U9IiMzZDVkNzciIGQ9Ik0yMiAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNGE2MCIgZD0iTTIzIDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2E1MzY5IiBkPSJNMCAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzM4NTc2ZSIgZD0iTTEgMTFoMSIgLz48cGF0aCBzdHJva2U9IiM0NTYzN2MiIGQ9Ik0yIDExaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGI2Yzg2IiBkPSJNMyAxMWgxTTMgMTNoMSIgLz48cGF0aCBzdHJva2U9IiM1Nzc5OTQiIGQ9Ik00IDExaDEiIC8+PHBhdGggc3Ryb2tlPSIjNjM4OWE3IiBkPSJNNiAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzY3OTFiMSIgZD0iTTcgMTFoMU03IDEyaDFNNyAxM2gxTTkgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM2ZjlhYmIiIGQ9Ik04IDExaDFNOCAxM2gxTTE2IDEzaDFNMTMgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM3YWE4Y2MiIGQ9Ik0xMCAxMWgxTTE0IDEzaDEiIC8+PHBhdGggc3Ryb2tlPSIjODBhZmQzIiBkPSJNMTEgMTFoMSIgLz48cGF0aCBzdHJva2U9IiM4MGIwZDQiIGQ9Ik0xMiAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzdlYWVkMiIgZD0iTTEzIDExaDEiIC8+PHBhdGggc3Ryb2tlPSIjNzA5YWJjIiBkPSJNMTYgMTFoMSIgLz48cGF0aCBzdHJva2U9IiM2NjhmYjAiIGQ9Ik0xNyAxMWgxTTE3IDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNWY4N2E1IiBkPSJNMTggMTFoMSIgLz48cGF0aCBzdHJva2U9IiM1YTdlOWMiIGQ9Ik0xOSAxMWgxTTcgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM0YTZkODgiIGQ9Ik0yMCAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ5NmI4NSIgZD0iTTIxIDExaDFNNCAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQzNjI3YiIgZD0iTTIyIDExaDFNMjEgMTNoMSIgLz48cGF0aCBzdHJva2U9IiMzZDVhNzEiIGQ9Ik0yMyAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNGM2MyIgZD0iTTAgMTJoMSIgLz48cGF0aCBzdHJva2U9IiMzMDRjNjEiIGQ9Ik0xIDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDU2NDdjIiBkPSJNMiAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ5NmE4NiIgZD0iTTMgMTJoMSIgLz48cGF0aCBzdHJva2U9IiM1Mzc2OTEiIGQ9Ik00IDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTU3YTk3IiBkPSJNNSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzY0OGJhYSIgZD0iTTYgMTJoMSIgLz48cGF0aCBzdHJva2U9IiM2ZjlhYmMiIGQ9Ik04IDEyaDFNMTIgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM4MmFmZDUiIGQ9Ik0xMSAxMmgxTTEzIDEyaDFNMTIgMTNoMSIgLz48cGF0aCBzdHJva2U9IiM4M2IyZDUiIGQ9Ik0xMiAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzdkYWFjZiIgZD0iTTE0IDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNmU5YWJiIiBkPSJNMTYgMTJoMSIgLz48cGF0aCBzdHJva2U9IiM2MTg4YTgiIGQ9Ik0xOCAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzU5N2Y5YiIgZD0iTTE5IDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTA3NDkxIiBkPSJNMjAgMTJoMSIgLz48cGF0aCBzdHJva2U9IiM0YzZjODYiIGQ9Ik0yMSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzNmNWI3MSIgZD0iTTIzIDEyaDFNMSAxM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzNhNTM2NyIgZD0iTTAgMTNoMSIgLz48cGF0aCBzdHJva2U9IiM1ODdhOTUiIGQ9Ik00IDEzaDFNMTEgMjBoMSIgLz48cGF0aCBzdHJva2U9IiM3ZmFkZDEiIGQ9Ik0xMSAxM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzdmYWNkMSIgZD0iTTEzIDEzaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTI3NDkwIiBkPSJNMjAgMTNoMSIgLz48cGF0aCBzdHJva2U9IiM0NjY0N2IiIGQ9Ik0yMiAxM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzMyNGM2MiIgZD0iTTIzIDEzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1NTZlIiBkPSJNMSAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzNhNTc2ZCIgZD0iTTIgMTRoMSIgLz48cGF0aCBzdHJva2U9IiM0OTY5ODQiIGQ9Ik0zIDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTM3NThmIiBkPSJNNCAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzVhN2Y5YSIgZD0iTTUgMTRoMSIgLz48cGF0aCBzdHJva2U9IiM2NThmYWYiIGQ9Ik03IDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNmQ5NmI5IiBkPSJNOCAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzdjYTljZCIgZD0iTTEzIDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNzZhNGM3IiBkPSJNMTQgMTRoMSIgLz48cGF0aCBzdHJva2U9IiM2NThlYWYiIGQ9Ik0xNyAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzVlODRhMSIgZD0iTTE4IDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTE3NTkyIiBkPSJNMTkgMTRoMSIgLz48cGF0aCBzdHJva2U9IiM0ZTcyOGUiIGQ9Ik0yMCAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzRhNmE4NCIgZD0iTTIxIDE0aDFNMTEgMjFoMSIgLz48cGF0aCBzdHJva2U9IiMzZjVlNzgiIGQ9Ik0yMiAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iIzNjNTg2ZiIgZD0iTTEgMTVoMSIgLz48cGF0aCBzdHJva2U9IiMzZjVkNzUiIGQ9Ik0yIDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDY2NzgwIiBkPSJNNCAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzVhN2Q5OSIgZD0iTTUgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM1YzgxOWYiIGQ9Ik02IDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjI4OWFhIiBkPSJNNyAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzZmOThiYiIgZD0iTTkgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM2ZTk4YmEiIGQ9Ik0xNSAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzY1OGVhZSIgZD0iTTE2IDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjE4YWE4IiBkPSJNMTcgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM1ZDgyYTAiIGQ9Ik0xOCAxNWgxTTkgMThoMSIgLz48cGF0aCBzdHJva2U9IiM1NTc4OTQiIGQ9Ik0xOSAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzRkNzA4YSIgZD0iTTIwIDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDQ2NTdlIiBkPSJNMjEgMTVoMSIgLz48cGF0aCBzdHJva2U9IiM0MzYwNzgiIGQ9Ik0yMiAxNWgxIiAvPjxwYXRoIHN0cm9rZT0iIzNkNTg2ZiIgZD0iTTIzIDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjMjYzZDUwIiBkPSJNMCAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQwNWM3MyIgZD0iTTIgMTZoMU0xOCAyMWgxTTE2IDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTQ3NjkxIiBkPSJNNSAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzU0NzY5MyIgZD0iTTYgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM2MDg1YTQiIGQ9Ik03IDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjNmI5NWI4IiBkPSJNMTAgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM2ZTlhYmMiIGQ9Ik0xMSAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzZjOTViNyIgZD0iTTE0IDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjU4ZGFjIiBkPSJNMTYgMTZoMSIgLz48cGF0aCBzdHJva2U9IiM1Mjc1OTIiIGQ9Ik0xOCAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzUwNzQ5MCIgZD0iTTE5IDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDc2OTg0IiBkPSJNMjAgMTZoMU0xMyAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ1NjQ3ZCIgZD0iTTIxIDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjMzM0ZjY1IiBkPSJNMjIgMTZoMSIgLz48cGF0aCBzdHJva2U9IiMzMzRmNjciIGQ9Ik0yMyAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iIzM2NGU2MSIgZD0iTTAgMTdoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU1NjkiIGQ9Ik0xIDE3aDEiIC8+PHBhdGggc3Ryb2tlPSIjMzY1NDZjIiBkPSJNMiAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzQ4Njg4MiIgZD0iTTQgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM1Njc2OTEiIGQ9Ik01IDE3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTc3YTk1IiBkPSJNNiAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzVkODRhMiIgZD0iTTggMTdoMSIgLz48cGF0aCBzdHJva2U9IiM2NDhjYWEiIGQ9Ik05IDE3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjg5MGIxIiBkPSJNMTEgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM2NzkxYjAiIGQ9Ik0xMyAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzVmODdhNiIgZD0iTTE1IDE3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNWY4NGEzIiBkPSJNMTYgMTdoMSIgLz48cGF0aCBzdHJva2U9IiM1Mzc3OTIiIGQ9Ik0xOCAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzQxNWY3OCIgZD0iTTIwIDE3aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDA1Zjc4IiBkPSJNMjEgMTdoMSIgLz48cGF0aCBzdHJva2U9IiMzMjRlNjQiIGQ9Ik0yMyAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iIzJjNDU1YSIgZD0iTTAgMThoMSIgLz48cGF0aCBzdHJva2U9IiMyOTQwNTMiIGQ9Ik0xIDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjMzM1MDY5IiBkPSJNMiAxOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzNiNTk3MiIgZD0iTTMgMThoMSIgLz48cGF0aCBzdHJva2U9IiM1Mjc2OTMiIGQ9Ik03IDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjM4OWE5IiBkPSJNMTIgMThoMSIgLz48cGF0aCBzdHJva2U9IiM1ZDgzYTEiIGQ9Ik0xMyAxOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzYwODdhNCIgZD0iTTE0IDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNjA4NWExIiBkPSJNMTUgMThoMSIgLz48cGF0aCBzdHJva2U9IiM1NzdjOTkiIGQ9Ik0xNiAxOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzUzNzc5MyIgZD0iTTE3IDE4aDEiIC8+PHBhdGggc3Ryb2tlPSIjNDY2NzgxIiBkPSJNMTggMThoMSIgLz48cGF0aCBzdHJva2U9IiM0YzZiODQiIGQ9Ik0xOSAxOGgxTTYgMTloMU0xNSAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQwNjE3YSIgZD0iTTIwIDE4aDFNMTggMjBoMU04IDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDE1ZDc0IiBkPSJNMjEgMThoMSIgLz48cGF0aCBzdHJva2U9IiMzMDRlNjYiIGQ9Ik0yMiAxOGgxTTggMjNoMSIgLz48cGF0aCBzdHJva2U9IiMyNzNmNTEiIGQ9Ik0yMyAxOGgxIiAvPjxwYXRoIHN0cm9rZT0iIzM0NGE1YiIgZD0iTTAgMTloMSIgLz48cGF0aCBzdHJva2U9IiMyZDQ3NWIiIGQ9Ik0xIDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjM2U1YTZmIiBkPSJNMyAxOWgxTTIwIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzU1MTY3IiBkPSJNNCAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzRjNmE4MiIgZD0iTTUgMTloMU0xNiAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzU1NzY5MCIgZD0iTTcgMTloMU0xNSAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzRlNzM4ZiIgZD0iTTggMTloMSIgLz48cGF0aCBzdHJva2U9IiM0ZjczOGUiIGQ9Ik05IDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTc3Yjk5IiBkPSJNMTAgMTloMSIgLz48cGF0aCBzdHJva2U9IiM1ODdkOWMiIGQ9Ik0xMSAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzU4N2U5YyIgZD0iTTEyIDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNTk3ZTlkIiBkPSJNMTMgMTloMSIgLz48cGF0aCBzdHJva2U9IiM1Njc5OTUiIGQ9Ik0xNSAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzRhNmM4OCIgZD0iTTE2IDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjNGM2ZjhhIiBkPSJNMTcgMTloMSIgLz48cGF0aCBzdHJva2U9IiM0MDYwN2EiIGQ9Ik0xOSAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iIzQyNWU3NSIgZD0iTTIwIDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjMmE0NTU5IiBkPSJNMjMgMTloMSIgLz48cGF0aCBzdHJva2U9IiMxOTJkM2QiIGQ9Ik0wIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzU0YjVlIiBkPSJNMSAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzJhNDY1YyIgZD0iTTIgMjBoMSIgLz48cGF0aCBzdHJva2U9IiMyZjRjNjIiIGQ9Ik0zIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2Q1OTZmIiBkPSJNNCAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzQzNWY3NCIgZD0iTTUgMjBoMSIgLz48cGF0aCBzdHJva2U9IiM0YzZhODEiIGQ9Ik02IDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDI2NDdmIiBkPSJNNyAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzQ4NmE4NiIgZD0iTTggMjBoMSIgLz48cGF0aCBzdHJva2U9IiM1NDc1OGYiIGQ9Ik0xMCAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzUzNzU5MCIgZD0iTTEzIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjNTY3NzkzIiBkPSJNMTQgMjBoMSIgLz48cGF0aCBzdHJva2U9IiM0ZTZkODYiIGQ9Ik0xNiAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzM1NTA2NyIgZD0iTTE5IDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzE0YzYzIiBkPSJNMjEgMjBoMSIgLz48cGF0aCBzdHJva2U9IiMzNzRmNjMiIGQ9Ik0yMiAyMGgxIiAvPjxwYXRoIHN0cm9rZT0iIzI0M2Q1MyIgZD0iTTIzIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzM0NzU3IiBkPSJNMCAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzIxM2E0ZiIgZD0iTTEgMjFoMSIgLz48cGF0aCBzdHJva2U9IiMyZTQ3NWEiIGQ9Ik0yIDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzM0ZDYzIiBkPSJNMyAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzMzNTA2NSIgZD0iTTQgMjFoMSIgLz48cGF0aCBzdHJva2U9IiMyZTQ5NWMiIGQ9Ik01IDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDM1ZTc0IiBkPSJNNiAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzRhNjY3ZSIgZD0iTTcgMjFoMSIgLz48cGF0aCBzdHJva2U9IiM1MjcwODgiIGQ9Ik05IDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjNDY2NzgyIiBkPSJNMTAgMjFoMSIgLz48cGF0aCBzdHJva2U9IiM0OTZhODMiIGQ9Ik0xNCAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzM3NTQ2YiIgZD0iTTE3IDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1NTZjIiBkPSJNMTkgMjFoMSIgLz48cGF0aCBzdHJva2U9IiMyZDRiNjEiIGQ9Ik0yMCAyMWgxIiAvPjxwYXRoIHN0cm9rZT0iIzJhNDY1YiIgZD0iTTIxIDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzQ0ODU5IiBkPSJNMjMgMjFoMSIgLz48cGF0aCBzdHJva2U9IiMxYjMzNDUiIGQ9Ik0wIDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMmE0MTUzIiBkPSJNMSAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzFjMzE0MSIgZD0iTTIgMjJoMSIgLz48cGF0aCBzdHJva2U9IiMyYTQ0NTgiIGQ9Ik0zIDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzY0ZjYzIiBkPSJNNCAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzM1NGY2NSIgZD0iTTUgMjJoMSIgLz48cGF0aCBzdHJva2U9IiM0MjVjNzAiIGQ9Ik02IDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGM2NTdiIiBkPSJNNyAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzQzNWY3NSIgZD0iTTggMjJoMSIgLz48cGF0aCBzdHJva2U9IiM0NjYzNzkiIGQ9Ik05IDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjNGY2YzgzIiBkPSJNMTAgMjJoMSIgLz48cGF0aCBzdHJva2U9IiM0MjYxN2EiIGQ9Ik0xMyAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzNkNWM3NSIgZD0iTTE1IDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2E1ODZlIiBkPSJNMTcgMjJoMSIgLz48cGF0aCBzdHJva2U9IiMzYTU3NmIiIGQ9Ik0xOCAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzJmNGI2MSIgZD0iTTE5IDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzI0YTVjIiBkPSJNMjEgMjJoMSIgLz48cGF0aCBzdHJva2U9IiMyMDM5NGYiIGQ9Ik0yMiAyMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzE5MmMzYiIgZD0iTTIzIDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzA0MzUzIiBkPSJNMCAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzE5MzA0MyIgZD0iTTEgMjNoMSIgLz48cGF0aCBzdHJva2U9IiMzMDQ2NTkiIGQ9Ik0zIDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMjUzZjU0IiBkPSJNNCAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzQ5NjI3NCIgZD0iTTYgMjNoMSIgLz48cGF0aCBzdHJva2U9IiMzZjU3NmEiIGQ9Ik03IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzM1MTY5IiBkPSJNOSAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzQ0NWY3NCIgZD0iTTEwIDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjM2Y1YjcyIiBkPSJNMTEgMjNoMSIgLz48cGF0aCBzdHJva2U9IiMzNjU1NmQiIGQ9Ik0xMyAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzNlNWI3MCIgZD0iTTE0IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMzk1MzY5IiBkPSJNMTcgMjNoMSIgLz48cGF0aCBzdHJva2U9IiMzNzRlNjEiIGQ9Ik0xOSAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzFlMzM0NCIgZD0iTTIwIDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMjk0MTU0IiBkPSJNMjEgMjNoMSIgLz48cGF0aCBzdHJva2U9IiMyYzQzNTQiIGQ9Ik0yMiAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzMwNDQ1NSIgZD0iTTIzIDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTcgMTBoMU0xNyAxMWgxTTE3IDEyaDFNMTcgMTNoMU01IDE0aDJNMTcgMTRoMU01IDE1aDJNMTYgMTVoM001IDE2aDE0TTUgMTdoMTRNNSAxOGgxNE01IDE5aDEzTTUgMjBoMTNNNiAyMWgxMU02IDIyaDEwTTcgMjNoOCIgLz48cGF0aCBzdHJva2U9IiNlYTcyNTciIGQ9Ik04IDZoMU0xMCA2aDFNMTEgN2gxTTExIDloMU04IDEwaDFNMTAgMTBoMSIgLz48cGF0aCBzdHJva2U9IiNlYzg3NmYiIGQ9Ik05IDZoMU03IDhoMSIgLz48cGF0aCBzdHJva2U9IiNlNTRmMzEiIGQ9Ik0xMSA2aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTMzZTIwIiBkPSJNMTIgNmgxTTEyIDEwaDFNMTEgMTFoMSIgLz48cGF0aCBzdHJva2U9IiNkYzMwMWEiIGQ9Ik0xMyA2aDEiIC8+PHBhdGggc3Ryb2tlPSIjZDIyNjE0IiBkPSJNMTQgNmgxIiAvPjxwYXRoIHN0cm9rZT0iI2U4NzQ1OSIgZD0iTTcgN2gxIiAvPjxwYXRoIHN0cm9rZT0iI2VmYjdhYiIgZD0iTTggN2gxTTEwIDdoMSIgLz48cGF0aCBzdHJva2U9IiNmMmQzY2UiIGQ9Ik05IDdoMSIgLz48cGF0aCBzdHJva2U9IiNlNDQyMjUiIGQ9Ik0xMiA3aDFNMTIgOWgxTTggMTFoMU0xMCAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iI2UzMzkxYyIgZD0iTTEzIDdoMU04IDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjZGIyYjE0IiBkPSJNMTQgN2gxTTE0IDhoMSIgLz48cGF0aCBzdHJva2U9IiNkMjIwMTAiIGQ9Ik0xNSA3aDFNMTUgOGgxTTE1IDloMSIgLz48cGF0aCBzdHJva2U9IiMwMDAwMDAiIGQ9Ik02IDhoMU0xNiA4aDFNNiA5aDFNMTYgOWgxTTYgMTBoMU0xNiAxMGgxTTUgMTFoMU0xNiAxMWgxTTUgMTJoMU0xNiAxMmgxTTUgMTNoMU0xNiAxM2gxTTYgMTRoMU0xMiAxNGgxTTE2IDE0aDFNNiAxNWgxTTEyIDE1aDJNMTUgMTVoMU03IDE2aDJNMTUgMTZoMU03IDE3aDFNOSAxN2g2TTYgMThoMU0xMCAxOGgxTTcgMTloMU05IDE5aDFNNiAyMGgxTTEwIDIwaDFNNyAyMWgxTTkgMjFoMU02IDIyaDFNMTAgMjJoMU03IDIzaDFNOSAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iI2YzZDRjZSIgZD0iTTggOGgxTTEwIDhoMU05IDloMSIgLz48cGF0aCBzdHJva2U9IiNmNWY1ZjUiIGQ9Ik05IDhoMSIgLz48cGF0aCBzdHJva2U9IiNlYzg0NmMiIGQ9Ik0xMSA4aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTM0OTI5IiBkPSJNMTIgOGgxTTkgMTFoMSIgLz48cGF0aCBzdHJva2U9IiNlMzNiMWUiIGQ9Ik0xMyA4aDFNOSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iI2VhNzQ1NyIgZD0iTTcgOWgxIiAvPjxwYXRoIHN0cm9rZT0iI2VmYjRhOSIgZD0iTTggOWgxIiAvPjxwYXRoIHN0cm9rZT0iI2YwYjVhYSIgZD0iTTEwIDloMSIgLz48cGF0aCBzdHJva2U9IiNlMzM3MWMiIGQ9Ik0xMyA5aDFNMTAgMTJoMSIgLz48cGF0aCBzdHJva2U9IiNkYjJhMTQiIGQ9Ik0xNCA5aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTU1MDMwIiBkPSJNNyAxMGgxTTExIDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjZWM4NTZlIiBkPSJNOSAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iI2UzMzUxYiIgZD0iTTEzIDEwaDEiIC8+PHBhdGggc3Ryb2tlPSIjZGIyNzE0IiBkPSJNMTQgMTBoMSIgLz48cGF0aCBzdHJva2U9IiNkMTFmMGYiIGQ9Ik0xNSAxMGgxIiAvPjxwYXRoIHN0cm9rZT0iI2UzMzkxYiIgZD0iTTYgMTFoMU0xMiAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iI2UzM2MxZiIgZD0iTTcgMTFoMSIgLz48cGF0aCBzdHJva2U9IiNlMjJlMTUiIGQ9Ik0xMyAxMWgxTTEyIDEyaDFNMTAgMTNoMSIgLz48cGF0aCBzdHJva2U9IiNkYTI1MTEiIGQ9Ik0xNCAxMWgxIiAvPjxwYXRoIHN0cm9rZT0iI2QxMWUwZiIgZD0iTTE1IDExaDEiIC8+PHBhdGggc3Ryb2tlPSIjZTIyZTE2IiBkPSJNNiAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iI2UzMzYxYiIgZD0iTTcgMTJoMSIgLz48cGF0aCBzdHJva2U9IiNlMzMyMTkiIGQ9Ik0xMSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iI2UxMjkxMiIgZD0iTTEzIDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjZDkxZTEwIiBkPSJNMTQgMTJoMSIgLz48cGF0aCBzdHJva2U9IiNkMDE3MGUiIGQ9Ik0xNSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iI2UyMjcxNCIgZD0iTTYgMTNoMSIgLz48cGF0aCBzdHJva2U9IiNlMjJhMTQiIGQ9Ik03IDEzaDFNMTEgMTNoMSIgLz48cGF0aCBzdHJva2U9IiNlMzJmMTUiIGQ9Ik04IDEzaDIiIC8+PHBhdGggc3Ryb2tlPSIjZTEyNjEyIiBkPSJNMTIgMTNoMSIgLz48cGF0aCBzdHJva2U9IiNlMTI0MTIiIGQ9Ik0xMyAxM2gxTTcgMTRoMSIgLz48cGF0aCBzdHJva2U9IiNkYTFiMGYiIGQ9Ik0xNCAxM2gxIiAvPjxwYXRoIHN0cm9rZT0iI2QwMTUwYyIgZD0iTTE1IDEzaDEiIC8+PHBhdGggc3Ryb2tlPSIjZTEyNTEyIiBkPSJNOCAxNGgxTTEwIDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTIyNjE0IiBkPSJNOSAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iI2UxMjAxMiIgZD0iTTExIDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjY2ExNTBlIiBkPSJNMTMgMTRoMSIgLz48cGF0aCBzdHJva2U9IiNkYjE2MTAiIGQ9Ik0xNCAxNGgxIiAvPjxwYXRoIHN0cm9rZT0iI2QwMTAwYyIgZD0iTTE1IDE0aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTIxYzEwIiBkPSJNNyAxNWg1IiAvPjxwYXRoIHN0cm9rZT0iI2QyMGYwYyIgZD0iTTE0IDE1aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTMxNjEwIiBkPSJNOSAxNmgyIiAvPjxwYXRoIHN0cm9rZT0iI2UyMTQwZiIgZD0iTTExIDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTIxMjBmIiBkPSJNMTIgMTZoMSIgLz48cGF0aCBzdHJva2U9IiNkYjEwMGYiIGQ9Ik0xMyAxNmgxIiAvPjxwYXRoIHN0cm9rZT0iI2QyMGMwZiIgZD0iTTE0IDE2aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTIwZjBmIiBkPSJNOCAxN2gxIiAvPjxwYXRoIHN0cm9rZT0iI2UzMGUxMSIgZD0iTTcgMThoMyIgLz48cGF0aCBzdHJva2U9IiNlMzBlMTYiIGQ9Ik04IDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjZTMwZTFhIiBkPSJNNyAyMGgzTTggMjFoMU03IDIyaDNNOCAyM2gxIiAvPjxwYXRoIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTEwIDE3aDZNOSAxOGg3TTkgMTloMU0xNSAxOWgxTTEwIDIwaDUiIC8+PHBhdGggc3Ryb2tlPSIjZDAwODEwIiBkPSJNMTAgMTloMU0xMiAxOWgxIiAvPjxwYXRoIHN0cm9rZT0iI2QwMDgwZSIgZD0iTTExIDE5aDEiIC8+PHBhdGggc3Ryb2tlPSIjYzcwODBmIiBkPSJNMTMgMTloMSIgLz48cGF0aCBzdHJva2U9IiNiZDA4MGYiIGQ9Ik0xNCAxOWgxIiAvPjxwYXRoIHN0cm9rZT0icmdiYSgwLDAsMCwwLjQpIiBkPSJNOCAxMGgzTTEzIDEwaDMiIC8+PHBhdGggc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDcwNTg4MjM1Mjk0MTE3NjUpIiBkPSJNOCAxMWgxTTEzIDExaDFNOCAxMmgxTTEzIDEyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNOSAxMWgyTTE0IDExaDJNMTAgMTJoMU0xNSAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iIzRkNGQ0ZCIgZD0iTTkgMTJoMU0xNCAxMmgxIiAvPjxwYXRoIHN0cm9rZT0iI2ZmOThkNyIgZD0iTTExIDIwaDEiIC8+PHBhdGggc3Ryb2tlPSIjZmY2ZmM3IiBkPSJNMTIgMjBoMSIgLz48cGF0aCBzdHJva2U9IiNmZjQ5YzIiIGQ9Ik0xMyAyMGgxTTEyIDIxaDEiIC8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTEgMjFoMU0xMyAyMWgxTTEyIDIyaDEiIC8+PHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNNSAxaDlNMyAyaDJNMTQgMmgxTTIgM2gxTTE1IDNoMU0yIDRoMU02IDRoMU0xNiA0aDFNMSA1aDFNNSA1aDFNMTEgNWg0TTE3IDVoMU0xIDZoMU01IDZoMU05IDZoMk0xNSA2aDFNMTcgNmgxTTEgN2g1TTggN2gxTTE1IDdoMU0xNyA3aDFNMSA4aDFNNCA4aDFNNyA4aDFNMTggOGgxTTMgOWgxTTYgOWgxTTE4IDloMU0zIDEwaDFNNiAxMGgxTTE5IDEwaDFNMiAxMWgxTTE5IDExaDFNMiAxMmgxTTE5IDEyaDFNMiAxM2gxTTE5IDEzaDFNMiAxNGgxTTE5IDE0aDFNMiAxNWgxTTIwIDE1aDFNMiAxNmgxTTIwIDE2aDFNMiAxN2gxTTIwIDE3aDFNMiAxOGgxTTIwIDE4aDFNMiAxOWgxTTE5IDE5aDFNMyAyMGgxTTE5IDIwaDFNMyAyMWgxTTE4IDIxaDFNMyAyMmgxTTE3IDIyaDFNNCAyM2gxTTE2IDIzaDEiIC8+PHBhdGggc3Ryb2tlPSIjNzM3MzczIiBkPSJNNSAyaDFNMyAzaDFNMyA0aDFNNyA0aDFNMiA1aDFNNiA1aDFNMiA2aDFNNiA2aDFNNiA3aDFNNSA4aDFNNCA5aDFNNCAxMGgxTTMgMTFoMU0zIDEyaDFNMyAxM2gxTTMgMTRoMU0zIDE1aDFNMyAxNmgxTTMgMTdoMU0zIDE4aDFNMyAxOWgxTTQgMjBoMU00IDIxaDFNNCAyMmgxTTUgMjNoMSIgLz48cGF0aCBzdHJva2U9IiM1MDUwNTAiIGQ9Ik02IDJoN000IDNoMTBNNCA0aDJNOCA0aDdNMyA1aDJNNyA1aDRNMTUgNWgxTTMgNmgyTTcgNmgyTTcgN2gxTTYgOGgxTTUgOWgxTTUgMTBoMU00IDExaDFNNCAxMmgxTTQgMTNoMU00IDE0aDFNNCAxNWgxTTQgMTZoMU00IDE3aDFNNCAxOGgxTTQgMTloMU01IDIxaDFNNSAyMmgxTTYgMjNoMSIgLz48cGF0aCBzdHJva2U9IiM0MTQxNDEiIGQ9Ik0xMyAyaDFNMTQgM2gxTTE1IDRoMU0xNiA1aDFNMTYgNmgxTTE2IDdoMU0xNyA4aDFNMTcgOWgxTTE4IDEwaDFNMTggMTFoMU0xOCAxMmgxTTE4IDEzaDFNMTggMTRoMU0xOSAxNWgxTTE5IDE2aDFNMTkgMTdoMU0xOSAxOGgxTTE4IDE5aDFNMTggMjBoMU0xNyAyMWgxTTE2IDIyaDFNMTUgMjNoMSIgLz48L3N2Zz4=",
              amount: 1
            },
            duration: "2 weeks",
            returnPercentage: 7
          },
          {
            borrowing: {
              type: "snip20",
              amount: 99,
              name: "sATOM",
              estimatedValue: 600
            },
            collateral: {
              type: "snip721",
              name: "Council of Gyld",
              icon: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret173emcjes7992g4n76xafnzut9407f7a56ql3k0_icon_1654869351074.png",
              image: "https://bafybeibcaodyk46mgbwxw5f7qdwynuhc7lw6gt72qpub2ikm2m6jkjm4c4.ipfs.nftstorage.link/328.png",
              amount: 1
            },
            duration: "3 weeks",
            returnPercentage: 5
          }
        ]
      )
    }, 5000)
  }, [setSelectedListings]);

  return (
    <>
      <div className="w-11/12 2xl:w-4/5 sm:pt-4 default:pt-6 big:pt-8 4k:pt-12 border-b border-black w-full mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-md sm:text-base default:text-xl big:text-3xl 4k:text-5xl font-medium text-white ml-6">
            NFT Lending Listings
          </h1>
          <a href="#" className="mr-6 mt-1 font-medium text-red-500 transition duration-150 text-tiny sm:text-kindasmaller default:text-base big:text-xl 4k:text-3xl">
            All Listings
          </a>
        </div>
        {/* Mobile */}
        <div className="sm:hidden grid grid-rows-2 grid-cols-3 grid-flow-col justify-center items-center w-full mt-4">
          <div className="row-span-1 col-span-2">
            <PrincipalDenomBox />
          </div>
          <div className="row-span-1 col-span-2">
            <CollateralDenomBox />
          </div>
          <div className="row-span-2 col-span-1 flex justify-center">
            <AdvancedButton />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-5 justify-center items-center w-full md:gap-x-12 mt-4">
          <div className="col-span-2 flex justify-center">
            <div className="w-full sm:w-5/6 sm:h-10 big:h-12 4k:h-16 h-8">
              <PrincipalDenomBox />
            </div>
          </div>
          <div className="col-span-2 flex">
            <div className="w-full sm:w-5/6 sm:h-10 big:h-12 4k:h-16 h-8">
              <CollateralDenomBox />
            </div>
          </div>
          <div className="col-span-1 flex">
            <AdvancedButton />
          </div>
        </div>
        <div className="pt-4 sm:pt-4 big:pt-8 sm:px-8">
          <div className="
            justify-center items-center grid
            grid-cols-2 sm:grid-cols-4 gap-4 w-full
            sm:gap-x-1 md:gap-x-2 lg:gap-x-4 desktop:gap-x-14 big:gap-x-20
          ">
            <>
              {
                listings.map((ele, index) => (
                  <BorrowCard key={'listing-' + index} listing={ele} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
};