# Launch $USBD

*Built with the [d4rth Launch Protocol](../LAUNCH-ANY-COIN-TEMPLATE.md).*

**Addresses**
- $BTC: `C5xph2yL6gMdxmuLGxJBkGpmuDFfyi5fqkBNhvL6pump`
- USDC: `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- Wrapped SOL: `So11111111111111111111111111111111111111112`

## 1. pump.fun (USDC)
Quote **USDC**. Name `Ultimate Super Bulma Dragonballs`, ticker `USBD`, image `USBD-ART/coin-images-and-logos/usbd-token-1000.png`, banner `USBD-ART/banners-and-headers/usbd-pumpfun-banner-1500x500.jpg` (banner can only be set at creation).

Dev buy **200M (20% of supply)**.

Fees: holder rewards are the point. To also share creator fees, keep creator fees **on** (not pump.fun's send-all-fees-to-holders switch) and pay holders from there. Strongly encouraged (not required): add GitHub `d4trhban3` as a creator-fee recipient. Nothing breaks without it.

Description: `$USBD Ultimate Super Bulma Dragonballs. The Bulma dollar. USDC main pool, locked $BTC and SOL pools. Fees go to holders. Fan parody.`

## 2. USBD + $BTC (Meteora, locked)
1. https://meteora.ag/create/dammv2/standard (Create → DAMM V2 → Standard Pool)
2. Base Token = USBD CA. Quote Token = $BTC.
3. Initial Price = USBD $ price ÷ $BTC $ price.
4. 100M USBD + equal $ value of $BTC.
5. Tick **Permanently lock my liquidity**. Create.

## 3. USBD + SOL (Meteora, locked)
Same, with wrapped SOL as quote. 100M USBD + equal $ value of SOL. Price = USBD $ ÷ SOL $.

## 4. Super mode
Slingoor: pair a chunk of every eco token with USBD the same way. Bulma becomes the router.

## Cost
- The curve gets pricier with every buy. Check the price on pump.fun before buying.
- Rough estimate from the public USDC curve numbers: ~$1,000 USDC for the 20% dev buy. Not a quote.
- Each Meteora pool also needs the other side in $BTC or SOL, equal in $ to the 100M USBD at that day's price.
- A pump.fun curve only sells ~79% of supply before it graduates to its USDC pool. Big dev buys eat most of that.

## Why 20% and not 2/3
2/3 would be ~84% of what the curve can sell, cost ~$7,000+ just on the curve, leave holders almost nothing to buy, and make the $BTC and SOL pools bigger than the USDC one. 20% keeps USDC the main pool and the dev bag reasonable.
