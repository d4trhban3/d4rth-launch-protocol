**Read this on the dark page:** https://d4trhban3.github.io/d4rth-launch-protocol/LAUNCH-ANY-COIN-TEMPLATE.html

# Launch any coin

**This is the template.** Copy it, fill in the blanks, launch. It works for any coin.

Part of the d4rth Launch Protocol. The main pool is USDC. Next to it you lock a slice against SOL, and, if you want one, a slice against a second pair of your choice.

**Blanks**
- Token: [NAME] / [TICKER].
- USDC (a dollar on Solana): `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- Wrapped SOL: `So11111111111111111111111111111111111111112`
- Second pair (optional): [PAIR] mint. A narrative coin, a stock token, or any coin your holders know.

## What these words mean
- **pump.fun** — the site you launch the coin on. Price goes up as people buy.
- **USDC** — a dollar on Solana. The main pool is priced in dollars.
- **Lock** — put coins in a pool and freeze them so they cannot be removed.
- **Meteora** — the site where those locked pools are made.
- **Second pair** — optional. Another coin you lock a slice against, chosen to fit your story: a narrative coin, a stock token, a coin from your scene.
- **Hub** — your coin, once other coins lock a piece of their supply against it.
- **Creator fee** — optional. A slice of the launch fees. Holders can still get the rest.
- **pump.fun curve** — the first trading pool. It only sells about 79% of the coins. Then the coin moves on by itself.
- **PumpSwap** — the regular pool it moves to after that. You do not set this up.

## The 6 steps
1. **Launch the coin on pump.fun, paired with USDC. That is the main pool.** USDC is a dollar on Solana. Name [NAME], ticker [TICKER].
2. **Buy about 20% of the coins yourself.** That leaves most of the rest for other people.
3. **Lock 10% in a pool with SOL on Meteora.** Lock means the money cannot be pulled back out. https://meteora.ag/create/dammv2/standard (Create → DAMM V2 → Standard Pool). *(DAMM V2 is Meteora's permanent pool. Tick the permanent-lock box.)* Base = [TICKER] mint, Quote = wrapped SOL. Initial Price = [TICKER] $ ÷ SOL $. Equal $ value on both sides. Tick **Permanently lock my liquidity**.
4. **Optional: lock up to 10% in a second pair of your choice.** Pick a narrative coin, a stock token, or any coin your holders know. Same pool as step 3, with that coin's mint as the Quote. Equal $ value on both sides. Skip it and the protocol still works.
5. **Leave the rest in the USDC pool.** That stays the main pool, during the launch and after. *(After the first pool sells about 79%, the coin moves to PumpSwap by itself.)*
6. **Then other coins can lock a piece of their supply against your coin.** Your coin becomes the hub they connect through. Same Meteora pool, permanently locked.

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
