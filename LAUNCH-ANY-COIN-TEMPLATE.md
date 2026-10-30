# Launch any coin

**This is the template. My coin or yours.** USBD, or a token of your choice. Copy it, fill in the blanks, launch.

Part of the d4rth Launch Protocol (DLP). The anchor is BTC. The new coin is USBD, or whatever you name it.

**Blanks**
- Token: [NAME] / [TICKER]. USBD if you use mine.
- Anchor token: BTC `C5xph2yL6gMdxmuLGxJBkGpmuDFfyi5fqkBNhvL6pump`
- USDC: `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- Wrapped SOL: `So11111111111111111111111111111111111111112`

## Quick terms
- **pump.fun curve** — the bonding curve you launch on. Price rises with every buy. It sells about 79% of supply, then the coin graduates.
- **PumpSwap** — the pool the coin moves to automatically once the curve finishes.
- **Meteora DAMM V2** — the permanent liquidity pool you lock against. Once locked, the liquidity cannot be removed.
- **Treasury hub** — the new coin that other tokens lock a chunk of supply against, so they all route through it.
- **Creator-fee recipient** — an optional wallet or GitHub user that receives a slice of the launch fees. Holder rewards stay on.

## The 6 steps
1. **Launch on pump.fun paired with USDC. That is the main pool.** Name [NAME], ticker [TICKER].
2. **Dev buy about 20% of supply.**
3. **Pair 10% with the ecosystem anchor token BTC on Meteora.** https://meteora.ag/create/dammv2/standard (Create → DAMM V2 → Standard Pool). *(DAMM V2 = Meteora’s permanent pool type. Tick the permanent-lock box so the liquidity cannot be pulled.)* Base = [TICKER] mint, Quote = BTC mint. Initial Price = [TICKER] $ ÷ BTC $. Equal $ value on both sides. Tick **Permanently lock my liquidity**.
4. **Pair 10% with SOL on Meteora.** Same way. Quote = wrapped SOL.
5. **The rest stays on USDC, through the curve and after graduation.** *(After the curve sells its ~79%, the coin automatically moves to PumpSwap.)* The pump.fun curve, then PumpSwap after it graduates.
6. **Then partner tokens pair a chunk of their supply to the new USBD (or token of your choice). It becomes the "treasury" hub.** Same Meteora pool, permanently locked. Every partner token gets a pool against it.

**Support the protocol (strongly encouraged).** Add GitHub `d4trhban3` as a pump.fun creator-fee recipient. Optional. See below.

## Fees
Send fees to holder rewards. That's the point.

## Support the protocol (strongly encouraged, not required)
This protocol came out of a lot of research and testing, and it's free and open. Creator fees are how you support it. Creator-fee recipient = an optional extra wallet that gets a share of the launch fees. You can still send the rest to holders. If you launch with the d4rth Launch Protocol, please add GitHub **d4trhban3** as a pump.fun creator-fee recipient.

1. On pump.fun, find the creator-fee recipients option (at token creation, or in the coin's creator-fee settings).
2. Add a recipient by GitHub username: `d4trhban3`.
3. Pick a share you're comfortable with.

It's optional. Nothing breaks without it. It only works if creator fees stay on, not pump.fun's send-all-fees-to-holders switch. Holder rewards are still the point, so you can share a slice and still pay holders.

Credit line: `d4rth Launch Protocol by @d4rthban3 (GitHub d4trhban3)`.

## Why 20%
Sources: https://pump.fun/docs/bonding-curve, https://lookonchain.com/feeds/57272, https://blog.sumo.trade/what-is-a-bonding-curve/
- A pump.fun curve only sells ~79% of supply before it graduates. Big dev buys eat it.
- 10% side pools stay smaller than the USDC pool, so USDC stays the main pool.
- It leaves most of the curve to real holders.

## Before you buy
The curve gets pricier with every buy. Check the live price on pump.fun first. Never share keys or seed phrases.

Not financial advice. d4rth Launch Protocol by @d4rthban3 (GitHub d4trhban3).
