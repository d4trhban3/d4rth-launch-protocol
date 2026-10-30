# Launch $USBD · Ultimate Super Bulma Dragonballs

*Built with the [d4rth Launch Protocol](../LAUNCH-ANY-COIN-TEMPLATE.md).*

**Addresses**
- $BTC: `C5xph2yL6gMdxmuLGxJBkGpmuDFfyi5fqkBNhvL6pump`
- USDC: `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- Wrapped SOL: `So11111111111111111111111111111111111111112`

## The sequence (do it in this order)

### 1. Launch Bulma paired with USDC
On pump.fun, quote **USDC**.  
Name: `Ultimate Super Bulma Dragonballs`  
Ticker: `USBD`  
Image: `USBD-ART/coin-images-and-logos/usbd-token-1000.png`  
Banner: `USBD-ART/banners-and-headers/usbd-pumpfun-banner-1500x500.jpg` (banner can only be set at creation).

Description: `$USBD Ultimate Super Bulma Dragonballs. The Bulma dollar. USDC main pool, locked $BTC and SOL pools. Fees go to holders. Fan parody.`

### 2. Buy the specified amount of supply
Dev buy **200M tokens (20% of supply)**.

### 3. Pair 10% with $BTC (locked)
1. https://meteora.ag/create/dammv2/standard (Create → DAMM V2 → Standard Pool)
2. Base Token = USBD CA. Quote Token = $BTC.
3. Initial Price = USBD $ price ÷ $BTC $ price.
4. Deposit **100M USBD** + equal $ value of $BTC.
5. Tick **Permanently lock my liquidity**. Create.

### 4. Pair 10% with SOL (locked)
Same process. Quote = wrapped SOL.  
Deposit **100M USBD** + equal $ value of SOL. Price = USBD $ ÷ SOL $.  
Permanently lock it.

### 5. The rest stays on USDC
Everything else trades on the USDC pool (the pump.fun curve, then PumpSwap after graduation). USDC remains the main pool.

### 6. AND THEN — for the Big Titty ecosystem specifically
**Slingoor (or whoever runs the eco):** take a chunk from every titty token in the ecosystem and pair each of those chunks with Bulma ($USBD).

Do it the same way as steps 3–4: Meteora DAMM V2, permanently locked.  
Every eco token gets a pool against $USBD.  
Bulma becomes the hub / router. Every pair routes through her. Super mode activated.

---

## Fees
Holder rewards are the point. To also share creator fees, keep creator fees **on** (not pump.fun’s send-all-fees-to-holders switch) and pay holders from there.  
Strongly encouraged (not required): add GitHub `d4trhban3` as a creator-fee recipient. Nothing breaks without it.

## Cost notes
- The curve gets pricier with every buy. Check the live price on pump.fun before buying.
- Rough estimate from public USDC curve numbers: ~$1,000 USDC for the 20% dev buy. Not a quote.
- Each Meteora pool also needs the other side ($BTC or SOL) equal in $ to the 100M USBD at that day’s price.
- A pump.fun curve only sells ~79% of supply before it graduates to its USDC pool. A 20% dev buy uses a meaningful slice of that while leaving room for holders.

## Why 20% and not 2/3
2/3 would be ~84% of what the curve can sell, cost ~$7,000+ just on the curve, leave holders almost nothing to buy, and make the $BTC and SOL pools bigger than the USDC one. 20% keeps USDC the main pool and the dev bag reasonable.
