# Indian Mid Cap & Small Cap Equity Funds + AMC Quality/Governance (as of 3 Oct 2026)

> **Read this first: how the data was gathered and how far to trust it.**
> - The plan was to pull NAV history from mfapi.in and compute CAGR, drawdowns, rolling returns, Sharpe and Sortino in Python. **That was not possible.** api.mfapi.in, amfiindia.com and every fund-data site I tried (Value Research, Morningstar, Angel One, sharpely, myinvestmentideas, Business Standard, BusinessWorld, multibagg) were **blocked by the sandbox's network proxy** (HTTP 403 / EGRESS_BLOCKED). **No number in these notes was computed independently.**
> - Every number below comes from **search-engine result summaries** of the cited pages. I could not open the pages themselves, so treat each figure as a **secondary, unverified snapshot**. Different aggregators use different as-of dates, and in several cases they contradict each other. Those conflicts are flagged where they occur.
> - The as-of date is the one the source states. "Direct Plan – Growth" is assumed wherever the source says "Direct".
> - Several figures from the summaries are clearly wrong, for example a ₹7.98 lakh cr AUM for Nippon Small Cap. These are marked **SUSPECT**. Do not use them.
> - Before any number is published, the report writer should re-verify it against the AMC factsheet (Sep 2026) or Value Research.

## Q1. Mid cap funds: quantitative evidence (returns, risk, AUM, cost, manager, restrictions)

### Takeaway
As of Sep 2026, no single mid-cap fund clearly dominates. The 2021–24 winner, Motilal Oswal Midcap, has badly lagged its benchmark over the last year (1Y ≈ 0.6% at 4 Sep 2026), although its 5Y CAGR (≈22.4%) is still top-tier. HDFC Mid Cap (₹1.08 lakh cr AUM, ≈6.9% cash) is the largest and most defensive. Invesco India Midcap and Edelweiss Mid Cap show the best mix of recent and 3-year numbers among the candidates where data was found. Rolling-return studies put Mahindra Manulife Mid Cap, Kotak Midcap, ICICI Pru Midcap, Motilal Oswal and Nippon Growth at the top over 3- and 5-year periods.

### Cited Findings
**Motilal Oswal Midcap Fund (Direct-G)**
- 1Y 0.63%, 3Y 18.85%, 5Y 22.40% (as of 4 Sep 2026). AUM ₹40,036 cr; expense ratio (TER) 0.95%. Managers: Niket Shah (since Jul 2020), Rakesh Shetty and Ankush Sood (since Nov 2022). Beats the Nifty Midcap 150 over 3Y and 5Y; trails it over 1Y — [INDmoney](https://www.indmoney.com/mutual-funds/motilal-oswal-midcap-direct-growth-3113)
- Return of 0.41% in the year to 27 Feb 2026, against 23.94% for its benchmark (BSE 150 Midcap TRI). NAV fell ~14% in about three months between Nov 2025 and Mar 2026, and AUM fell by more than ₹4,300 cr — [Equitymaster, "Why Motilal Oswal Mid-cap Fund is Falling?"](https://www.equitymaster.com/the-fundstrategist/detail.asp?date=03%2F11%2F2026&story=11&title=Why-Motilal-Oswal-Mid-cap-Fund-is-Falling) / [Finsights by Square League](https://www.finsightsbysquareleague.com/post/motilal-oswal-midcap-fund-understanding-a-period-of-underperformance)
- Portfolio in early 2026: 25 stocks. Top 5 = 33.99% and top 10 = 59.17% of the portfolio. Top 3 holdings: Kalyan Jewellers 8.87%, One97 Communications (Paytm) 8.08%, Eternal 6.37%. Cash 2.11% (28 Feb 2026). IT was the largest sector exposure; Persistent Systems (6.2%) and Coforge (6.1%) were down ~25% and ~33% YTD in 2026 — same sources as above (aggregated in the search summary; individual figures not checked on the page)
- 3Y average rolling return 22.75%; 5Y average rolling return 24.29% — [myinvestmentideas, "5 Best Mid Cap Funds 2026 (rolling returns)"](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)

**HDFC Mid Cap Fund (formerly Mid-Cap Opportunities)**
- AUM ₹1,08,324.55 cr (30 Sep 2026). 1Y 5.99%, 3Y 17.24%, 5Y 18.88%. Manager: Chirag Setalvad — [Groww](https://groww.in/mutual-funds/hdfc-mid-cap-fund-direct-growth)
- Top holdings: TREPS (cash) 6.91%, Federal Bank 4.21%, AU Small Finance Bank 3.98%, Max Financial Services 3.79%, IPCA Labs 3.30%. Top sectors: pharma 11.71%, private banks 11.26%, auto parts 9.53% — [Groww](https://groww.in/mutual-funds/hdfc-mid-cap-fund-direct-growth)
- AMFI stress test (May 2026): **34 days to liquidate 50%** of the portfolio, the slowest among mid-cap funds cited — [Bajaj Broking, "Midcap & Smallcap Fund Stress Test: May 2026 Data"](https://www.bajajbroking.in/share-market-news/midcap-and-smallcap-fund-stress-test-may-2026-data)

**Kotak Midcap Fund (formerly Emerging Equity)**
- Fund AUM ₹71,256.25 cr; TER 0.54%; 19.41% annualised since inception. A second AUM figure in the same summary (₹6,19,695 cr) is **SUSPECT**: it is probably Kotak AMC's total AUM — [Groww](https://groww.in/mutual-funds/kotak-emerging-equity-scheme-direct-growth)
- 3Y average rolling return 25.77%; 5Y average rolling return 25.95% (#2 in the source's rolling-return ranking) — [myinvestmentideas](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)

**Edelweiss Mid Cap Fund**
- AUM ₹19,891 cr (Sep 2026); TER 0.71%; 1Y 4.96%, 3Y 19.97%, 5Y 17.71% — [INDmoney](https://www.indmoney.com/mutual-funds/edelweiss-mid-cap-fund-direct-plan-growth-option)
- 3Y average rolling return 22.20%; 5Y average rolling return 23.61% — [myinvestmentideas](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)
- The 5Y figures conflict: INDmoney's trailing 5Y (17.71%) is far below the 5Y rolling average (23.61%). That is plausible, because the two measure different things.

**Invesco India Mid Cap Fund**
- AUM ₹15,905 cr; TER 0.48%; 1Y 6.69%, 3Y 22.42% (date not stated, ~Sep 2026) — [INDmoney / search summary](https://www.indmoney.com/mutual-funds/edelweiss-mid-cap-fund-direct-plan-growth-option)
- 3Y return of 24.47% (top quartile) on a separate aggregator with an unknown date. This conflicts with the 22.42% above, most likely because of different as-of dates — [5paisa mid-cap list](https://www.5paisa.com/mutual-funds/mid-cap-funds)

**Nippon India Growth (Mid Cap) Fund**
- 3Y average rolling return 21.73%; 5Y average rolling return 23.05% (#5 in the source's ranking) — [myinvestmentideas](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)

**Funds not on the brief that rank high on rolling returns:** Mahindra Manulife Mid Cap (3Y average rolling 27.09%, 5Y 27.27%, #1) and ICICI Pru Midcap (3Y 24.19%, 5Y 24.42%) — [myinvestmentideas](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)
- ICICI Pru Midcap removed its ₹2 lakh monthly SIP cap from 16 Jul (2026). Its **lump-sum restriction remains** — [Upstox](https://upstox.com/news/personal-finance/mutual-funds/icici-prudential-midcap-fund-removes-2-lakh-monthly-sip-cap-from-july-16-lump-sum-restriction-stays/article-196913/)

**Category context:** mid-cap funds have averaged ~19.4% over 5Y, with 3Y returns of 20–25% and larger drawdowns — [5paisa](https://www.5paisa.com/mutual-funds/mid-cap-funds)

### Inferences
- Motilal Oswal Midcap's track record comes from a concentrated, high-conviction book of ~25 stocks with ~59% in the top 10. In 2026 the same concentration in IT, Kalyan, Paytm and Eternal produced a gap of more than 20 percentage points against the benchmark over one year. Its long-run CAGR is real, but the fund's tracking-error risk is much higher than peers'.
- HDFC Mid Cap's large cash position (~7%) and diversified, financials- and pharma-heavy book suggest it will hold up better in falls such as September 2026. Its size, however, shows up as the longest liquidation time in the mid-cap category (34 days).
- Index option: a Nifty Midcap 150 index fund would have captured the benchmark's ~24% one-year gain to Feb 2026 that Motilal missed. That supports a core index allocation plus one or two active satellite funds.

### Gaps
- **None of the following could be computed or found** for any mid-cap candidate: 10Y CAGR, YTD 2026 return, alpha, beta, standard deviation, Sharpe, Sortino, max drawdown for Sep 2024–Mar 2025 and for 2026, fund-manager tenure (except Motilal), exit load. mfapi.in and Value Research/Morningstar were blocked.
- No Sep 2026 data was found for PGIM India Midcap, Axis Midcap, Quant Mid Cap or Nippon India Nifty Midcap 150 Index Fund.
- No Sep 2026 factsheet top-10 lists were found, except Motilal (Feb 2026) and HDFC (top 5, ~Sep 2026).

## Q2. Small cap funds: quantitative evidence

### Takeaway
Over five years to Sep 2026, the top small-cap funds cluster at **~19–21% CAGR**, not 30%. In the Upstox ranking, Invesco India Smallcap (20.62%), Bank of India (20.56%), Bandhan (20.25%) and Quant (20.09%) lead, with Nippon (19.29%) close behind. Bandhan Small Cap has the strongest combination of 3Y returns and Sharpe ratio. SBI Small Cap and HDFC Small Cap have lagged badly over 1–3 years. Lump-sum limits still apply at Nippon and SBI. Tata reopened lump sums on 6 Apr 2026.

### Cited Findings
- **Top 5Y CAGR, Sep 2026:** Invesco India Smallcap 20.62%, Bank of India Small Cap 20.56%, Bandhan Small Cap 20.25%, Quant Small Cap 20.09%, ITI Small Cap 19.53%, Nippon India Small Cap 19.29%. The source names Bank of India Small Cap as the best on risk-adjusted measures among these — [Upstox, "5 top small-cap funds by CAGR, Rank, AUM in September 2026"](https://upstox.com/news/personal-finance/mutual-funds/5-top-small-cap-funds-by-cagr-rank-aum-in-september-2026-how-they-compare-on-volatility-measures/article-200191/)
- **Nippon India Small Cap:** NAV ₹202.29 (1 Oct 2026); manager Samir Rachh — [Groww](https://groww.in/mutual-funds/nippon-india-small-cap-fund-direct-growth). 5Y annualised **18.06%** as of 2 Oct 2026 — [Value Research](https://www.valueresearchonline.com/funds/16182/nippon-india-small-cap-fund-direct-plan/). This conflicts with Upstox's 19.29%, likely because the two sources use different end dates.
  - The AUM of ₹7,97,966 cr in the summary is **SUSPECT**. It matches the scale of Nippon AMC's total AUM, not the fund's.
  - Another aggregator puts the fund's AUM at ₹78,956.8 cr with a 1.41% TER, which looks like a Regular-plan TER — [Scripbox](https://scripbox.com/mutual-fund/best-small-cap-mutual-funds/)
  - Investment limits were revised from 30 Mar 2026: SIP limits were raised, but **lump sums stayed closed** — [FundsIndia bulletin](https://www.fundsindia.com/blog/bulletin/revision-in-investment-limits-nippon-india-small-cap-fund/34317) / [equityresearchindia](https://www.equityresearchindia.com/post/capacity-limits-why-small-cap-funds-restrict-lump-sums-and-what-aum-growth-does-to-returns)
- **SBI Small Cap:**
  - NAV ₹208.52 (30 Sep 2026); 1Y 7.55%; AUM ₹42,630.89 cr (30 Sep 2026) — [Tickertape / 5paisa summary](https://www.tickertape.in/mutualfunds/sbi-small-cap-fund-M_SBILM)
  - Another source gives 1Y 5.47%, 3Y 10.8%, 5Y 13.15% (date unknown) — [INDmoney comparison](https://www.indmoney.com/blog/mutual-funds/bandhan-small-cap-fund-vs-nippon-invesco-comparison)
  - TREPS/cash at 9.18% (7 Sep 2026) — [5paisa](https://www.5paisa.com/blog/sbi-small-cap-fund-direct-growth-nav-07-sep-2026)
  - Lump sum closed; SIP allowed up to ₹25,000 (status as of Apr 2026) — [equityresearchindia](https://www.equityresearchindia.com/post/capacity-limits-why-small-cap-funds-restrict-lump-sums-and-what-aum-growth-does-to-returns)
  - **59 days to liquidate 50%** (May 2026 stress test), the worst cited — [Bajaj Broking](https://www.bajajbroking.in/share-market-news/midcap-and-smallcap-fund-stress-test-may-2026-data)
- **Bandhan Small Cap:**
  - 1Y 10.49%, 3Y 23.22%, 5Y 19.3%; Sharpe 1.22; 1Y drawdown −10.08%; 3Y max drawdown −22.78%, recovered in ~245 days — [INDmoney comparison](https://www.indmoney.com/blog/mutual-funds/bandhan-small-cap-fund-vs-nippon-invesco-comparison)
  - Another aggregator gives a 3Y return of 29.16%, Sharpe 1.08 and TER 0.33% (Direct), and also AUM ₹31,103 cr with a 1.75% TER (Regular) — [Scripbox](https://scripbox.com/mutual-fund/best-small-cap-mutual-funds/)
  - A third summary gives a Sharpe of 0.50. **The 3Y return and Sharpe figures conflict across sources**, probably because of different dates.
- **Quant Small Cap:**
  - 1Y 13.46%, 3Y 16.97%, 5Y 18.65%; 3Y Sharpe 0.76 — [INDmoney comparison](https://www.indmoney.com/blog/mutual-funds/bandhan-small-cap-fund-vs-nippon-invesco-comparison)
  - AUM ₹34,068.9 cr; TER 1.76% (Regular) — [Scripbox](https://scripbox.com/mutual-fund/best-small-cap-mutual-funds/)
  - AUM ₹31,763 cr in the May 2026 stress test; **54 days to liquidate 50%**, 27 days for 25% — [Bajaj Broking](https://www.bajajbroking.in/share-market-news/midcap-and-smallcap-fund-stress-test-may-2026-data)
- **Axis Small Cap:** NAV ₹133.91 (30 Sep 2026); 1Y 10.97%; AUM ₹31,448.32 cr (30 Sep 2026) — [Groww / Tickertape summary](https://groww.in/mutual-funds/axis-small-cap-fund-direct-growth)
- **HDFC Small Cap:** NAV ₹159.92 (24 Sep 2026); 1Y −2.34%, 3Y 11.16%, 5Y 14.62%; AUM ~₹41,891 cr — [5paisa](https://www.5paisa.com/blog/hdfc-small-cap-fund-direct-growth-nav-24-sep-2026)
- **Invesco India Smallcap:** TER 0.39% (Direct); Sharpe 0.89; AUM ₹11,716.88 cr — [Scripbox](https://scripbox.com/mutual-fund/best-small-cap-mutual-funds/)
- **Tata Small Cap:** reopened lump-sum investments from 6 Apr 2026, after limiting inflows to SIPs since Jun 2023. The AMC cited the correction as having created a better valuation window — [Cafemutual](https://cafemutual.com/news/press-news/37420-tata-mutual-fund-allows-lumpsum-investments-in-small-cap-plan-again)
- **Smaller funds outside the brief** that lead on 1Y returns: TrustMF Small Cap 1Y 33.87% (AUM ₹2,860 cr); Bank of India Small Cap 1Y 28.83%, 3Y 22.35%, 5Y 21%; Motilal Oswal Small Cap 1Y 25.65% (AUM ₹7,605 cr). These are small funds with short histories — [5paisa blog / Scripbox summary](https://www.5paisa.com/blog/top-small-cap-mutual-funds-in-2026-delivered-over-25-percent-in-1-year)
- **Drawdown, 26 Sep 2024 to 20 Feb 2025** (BSE 250 Smallcap TRI −21.3%; mid caps −17.8%; Sensex −11.3%):
  - Worst funds: Mahindra Manulife SC −21.65%, ABSL SC −20.35%, **Quant SC −19.91%**, **Kotak SC −19.68%**, BoI SC −19.08%
  - Most resilient: Motilal Oswal SC −11.37%, Quantum SC −12.28%, **Invesco SC −14.61%**, UTI SC −14.91%, **HDFC SC −14.95%**
  - Sources: [Value Research, "5 winning and losing small-cap funds in this market crash"](https://www.valueresearchonline.com/stories/223196/5-strongest-weakest-small-cap-funds-market-crash/) / [Business Standard](https://www.business-standard.com/finance/personal-finance/revealed-5-small-cap-mutual-funds-with-least-damage-in-this-market-crash-125022400174_1.html)
- **Long-run category evidence:** across rolling periods, the mid-cap index averaged 17.9% a year against 14.7% for the small-cap index. Active small-cap funds averaged 16.66% against 15.70% for active mid-cap funds — [Value Research, "Mid-Cap vs Small-Cap Funds"](https://www.valueresearchonline.com/learn/mutual-funds/mid-cap-vs-small-cap-funds-which-delivers-better-returns-long-term/)

### Inferences
- **Bandhan Small Cap and Invesco India Smallcap** have the best evidence on returns and risk combined:
  - both are in the top 5Y group;
  - Bandhan has the highest Sharpe and leads on 3Y;
  - Invesco fell only −14.6% in the 2024–25 crash and has a low TER.
- **Quant Small Cap** matches them on 5Y CAGR but carries more risk:
  - it was among the worst in the 2024–25 crash;
  - its liquidity is among the slowest (54 days to liquidate 50%);
  - its AMC faced a governance case (see Q4).
- **SBI Small Cap and HDFC Small Cap** look like funds weighed down by size. Both have more than ₹40k cr AUM, weak 3Y and 5Y returns, and SBI has ~9% cash and the longest liquidation time (59 days).
- Active small-cap funds have historically beaten the small-cap index by roughly 2 points a year (Value Research). That supports active management here more than in mid caps, but only in funds with sensible size and liquidity.

### Gaps
- Not available for most small-cap funds: 10Y CAGR, YTD 2026, alpha, beta, standard deviation, Sortino, and the 2026 drawdown by fund.
- Fund-manager tenure is not available, except that Samir Rachh manages Nippon (start date not confirmed).
- Exit loads were not confirmed. The typical figure of 1% within 1 year is not verified here.
- No Sep 2026 data was found for Kotak Small Cap or the Motilal Oswal Nifty Smallcap 250 index fund.
- Bandhan's 3Y return and Sharpe conflict across sources (23.22% vs 29.16%; Sharpe 1.22 / 1.08 / 0.50).

## Q3. Holdings, cash and liquidity (AMFI stress tests) and the 2026 market backdrop

### Takeaway
Liquidity risk is concentrated in the large small-cap funds: SBI SC needs 59 days and Quant SC 54 days to sell 50% of the portfolio (May 2026). Among mid-cap funds, HDFC Mid Cap (34 days) is the slowest. 2026 has been a year of divergence: the Nifty 50 fell ~10–13%, while mid and small caps hit record highs through August before a sharp correction in September 2026 (Midcap 150 −7.1%).

### Cited Findings
- **AMFI stress test, May 2026:**
  - The larger the fund and the more it holds in small caps, the longer it takes to liquidate
  - HDFC Mid Cap: 34 days for 50%
  - SBI Small Cap: 59 days for 50%
  - Quant Small Cap: 54 days for 50%, 27 days for 25%
  - Small funds (Baroda BNP, ITI, LIC, PGIM India SC, Helios, TrustMF, Union, JM): 1–2 days
  - Source: [Bajaj Broking](https://www.bajajbroking.in/share-market-news/midcap-and-smallcap-fund-stress-test-may-2026-data)
- **AMFI stress test, July 2026:** small-cap schemes with larger mid-cap allocations liquidate faster. Example: ITI Small Cap (24.51% in mid caps) can liquidate 50% in one day — [Upstox](https://upstox.com/news/personal-finance/mutual-funds/small-cap-fund-stress-test-schemes-with-greater-midcap-exposure-fare-better-on-liquidity/article-199276/)
- **Cash levels:** HDFC Mid Cap TREPS 6.91% (~Sep 2026) — [Groww](https://groww.in/mutual-funds/hdfc-mid-cap-fund-direct-growth); SBI Small Cap TREPS 9.18% (Sep 2026) — [5paisa](https://www.5paisa.com/blog/sbi-small-cap-fund-direct-growth-nav-07-sep-2026); Motilal Oswal Midcap cash 2.11% (Feb 2026) — [Finsights](https://www.finsightsbysquareleague.com/post/motilal-oswal-midcap-fund-understanding-a-period-of-underperformance)
- **September 2026 returns:** Nifty and Sensex down ~6% each; Nifty Midcap 150 −7.1%; Nifty Smallcap 250 −3.1%. The Midcap 150 had gained more than 21% from April to August 2026. 131 of the 150 midcap stocks (87%) were down over the month to 28 Sep 2026 — [Business Standard, "Nifty Midcap 150 index tanks 7% in September"](https://www.business-standard.com/amp/markets/news/nifty-midcap-150-index-tanks-7-in-september-87-stocks-show-loss-126092900328_1.html); [Business Standard, "Domestic inflows propel smallcaps in H1FY27 despite September rout"](https://www.business-standard.com/markets/news/domestic-inflows-propel-smallcaps-in-h1fy27-despite-september-rout-126093001371_1.html)
- **Nifty level and 2026 decline:**
  - Nifty closed at 23,063.10 on 24 Sep 2026 (−1.64% that day); midcaps fell ~2.3% — [INDmoney blog](https://www.indmoney.com/blog/stocks/nifty-falls-financials-midcaps-september-24-2026)
  - As of 18 Sep 2026 the Nifty was **13.4% below its 26 Sep 2024 level**, and "down 13% in 2026 so far" — [multibagg.ai](https://www.multibagg.ai/market-pulse/articles/indian-market-correction-nifty-2026-cmuqvcsu4001s2smcfm2y8nf9)
  - Another source puts the Nifty 50 fall at about 10% in 2026 — [Upstox](https://upstox.com/news/market-news/stocks/why-are-midcaps-and-smallcaps-outperforming-nifty-50-in-2026-ytd-explained/article-200196/)
- **Mid/small outperformance in 2026 to ~end-Aug:**
  - Nifty Midcap 100 up ~3% and Smallcap 100 up ~13% YTD, near record highs
  - Midcap outperformed the Nifty by 14.03 percentage points and smallcap by 20.36 points
  - Drivers: FII selling concentrated in large caps (FII ownership at a 17-year low), geopolitics, inflation risk
  - Sources: [Upstox](https://upstox.com/news/market-news/stocks/why-are-midcaps-and-smallcaps-outperforming-nifty-50-in-2026-ytd-explained/article-200196/); [Business Standard, 1 Sep 2026](https://www.business-standard.com/markets/news/mid-small-cap-indices-outperformance-vs-nifty-at-highest-in-2026-analysts-weigh-in-126090100517_1.html); [Upstox, "Nifty small-cap 100 soars 13% in 2026"](https://upstox.com/news/market-news/stocks/nifty-small-cap-100-soars-13-in-2026-to-fresh-record-highs-here-is-what-lifted-sentiment-for-smallcap-stocks/article-199486/)
- **Valuations:**
  - Nifty Smallcap 250 P/E 33.23 (Sep 2026), ~17% above its 5Y median of 28.33 and above every median window (1Y 29.91, 3Y 30.09, full history 30.85). 1Y point-to-point return 4.27% — [indexpe.in](https://indexpe.in/nifty-smallcap-250)
  - Nifty Midcap 150 at 21,643.85 (1 Oct 2026); P/E 25.79, P/B 4.32, dividend yield 0.83% — [Tickertape](https://www.tickertape.in/indices/nifty-midcap-150-.NIMI150). Tickertape's P/E method is unknown; it appears low against historical ranges reported elsewhere and needs verification.
- **Earlier Motilal Midcap holdings (Feb 2026):** Persistent Systems down ~25% and Coforge down ~33% YTD in 2026 — [Equitymaster](https://www.equitymaster.com/the-fundstrategist/detail.asp?date=03%2F11%2F2026&story=11&title=Why-Motilal-Oswal-Mid-cap-Fund-is-Falling)

### Inferences
- In a stress scenario, investors in SBI SC, Quant SC and similar large funds face real liquidity risk: two to three months to sell half the book. Smaller and mid-cap-tilted small-cap funds liquidate far faster.
- 2026 is not a broad-market "crash" for SMIDs. Large caps fell, SMIDs rallied until August, and then everything fell in September. Small-cap valuations remain **above** their historical medians.

### Gaps
- No full fund-by-fund AMFI stress-test table (Aug/Sep 2026) could be fetched; only the figures above.
- No 2026 peak-to-trough drawdown figures by fund.
- No top-10 holdings from the Sep 2026 factsheets for most funds, and no 2026 performance of those holdings, beyond the Motilal IT names.

## Q4. AMC-level quality, size and governance

### Takeaway
SBI, ICICI Pru, HDFC and Nippon are the four largest AMCs (QAAUM Apr–Jun 2026: ₹12.57, 11.15, 9.35 and 7.52 lakh cr; industry ₹82.22 lakh cr in June 2026). On governance, SEBI's final order in the **Axis MF** front-running case (24 Jul 2026) penalised the ex-chief dealer and 20 others. In the **Quant MF** case, founder Sandeep Tandon and HNI Sumana Paruchuri filed for and reportedly obtained a SEBI settlement, without admitting or denying guilt. The settlement amount could not be confirmed.

### Cited Findings
- **QAAUM, Apr–Jun 2026:** SBI MF ₹12.57 lakh cr; ICICI Pru ₹11.15 lakh cr; HDFC ₹9.35 lakh cr; Nippon India ₹7.52 lakh cr. Kotak is also in the top five. Industry AUM ₹82.22 lakh cr (Jun 2026). ICICI Pru AMC reported QAAUM including alternates above ₹11.96 lakh cr (30 Jun 2026) — [Groww top AMCs](https://groww.in/blog/top-amc-asset-management-company-india-biggest) / [Motilal Oswal learning centre](https://www.motilaloswal.com/learning-centre/2026/7/best-amc-stocks-in-india) / [rightadvise](https://rightadvise.com/amc-aum-india.html)
- **Quant MF:**
  - SEBI ran search-and-seizure operations in Mumbai and Hyderabad on 20 Jun 2024. Alleged front-running was put at ₹70–80 cr, with profits elsewhere reported at ~₹20 cr — [Moneylife](https://moneylife.in/article/sebi-investigates-quant-mutual-fund-for-suspected-frontrunning-amid-rapid-growth-moneycontrol/74473.html); [Business Standard](https://www.business-standard.com/markets/news/who-is-sandeep-tandon-what-is-front-running-all-about-quant-mutual-fund-124062400186_1.html)
  - Clients pulled ~$168 mn in three days after the probe became public — [Business Standard](https://www.business-standard.com/markets/mutual-fund/quant-mutual-s-clients-pull-168-million-in-three-days-after-sebi-probe-124062700503_1.html)
  - AUM grew from ~₹100 cr in 2019 to nearly ₹90,000 cr (2024) — [Moneylife](https://moneylife.in/article/sebi-investigates-quant-mutual-fund-for-suspected-frontrunning-amid-rapid-growth-moneycontrol/74473.html)
  - Tandon and Paruchuri **filed for SEBI settlement** — [BW Businessworld](https://www.businessworld.in/article/another-high-profile-front-running-case-sandeep-tandon-sumana-paruchuri-file-for-sebi-settlement-544442)
  - A later BW article is headlined "SEBI Committee Accepts Settlements from Nippon and Quant Mutual Fund Executives in Separate Cases". The search summary dates this to ~Aug 2025, and settlement means no admission or denial and closure of proceedings — [BW Businessworld](https://www.businessworld.in/article/sebi-committee-accepts-settlements-from-nippon-and-quant-mutual-fund-executives-in-separate-cases-566289)
  - **Neither page could be opened to confirm the settlement amount or date.** A separate search found no published settlement amount.
  - The Quant CFO resigned in 2024; the AMC says this happened before the probe — [Benzinga](https://in.benzinga.com/content/39744667/quant-mutual-fund-clarifies-cfo-resignation-happened-before-sebi-probe-amid-media-reports)
- **Axis MF:**
  - SEBI final order, 24 Jul 2026: ex-chief dealer Viresh Joshi barred for 7 years, fined ₹3 cr, and disgorgement of ~₹30.55 cr in unlawful gains confirmed. Trades ran from 1 Sep 2021 to 31 Mar 2022, with tips passed to Dubai-based Prijesh Kurani through mule accounts. 20 others were barred for 3–7 years with penalties of ₹10 lakh to ₹1 cr each; the reported total is ₹7.5 cr across 21 entities — [Business Today](https://www.businesstoday.in/latest/corporate/story/axis-mf-front-running-case-sebi-bars-former-mf-dealer-viresh-joshi-for-7-years-imposes-rs3-crore-penalty-545155-2026-07-24); [Moneylife](https://www.moneylife.in/article/axis-mutual-fund-frontrunning-sebi-bars-exchief-dealer-viresh-joshi-for-7-years-imposes-3-crore-fine-21-entities-face-market-ban-3056-crore-disgorgement/81162.html); [Free Press Journal](https://www.freepressjournal.in/amp/business/sebi-fines-21-entities-75-crore-bans-former-axis-mf-manager-in-front-running-case)
  - Separately, ex-Axis fund manager Deepak Agrawal paid ₹85.8 lakh to settle with SEBI (date not captured) — [Moneylife](https://moneylife.in/article/axis-mfs-exmanager-deepak-agrawal-pays-rs858-lakh-to-settle-case-with-sebi/78282.html)
- **Nippon Life India AM:** reported to have agreed a ~US$10 mn settlement in a SEBI probe linked to Yes Bank AT1 bond losses, including a return of funds to affected investors (date not confirmed) — [search summary of BW / reinasia](https://www.businessworld.in/article/sebi-committee-accepts-settlements-from-nippon-and-quant-mutual-fund-executives-in-separate-cases-566289)
- **SBI MF:** settled SEBI proceedings and paid more than ₹14 cr in settlement charges (date and subject not captured; secondary page) — [jpmc.iiit.ac.in news page](https://jpmc.iiit.ac.in/static/news_pages/149.html)

### Inferences
- Axis's case involved an individual dealer. SEBI's actions targeted the dealer and the front-runners, not the AMC's fund management. The Quant case went up to the founder and CIO, which is a more serious key-person and governance concern even though it was settled without admission.
- The Quant settlement removes legal overhang but not the governance signal. Its risk-adjusted fund record (worst-tier 2024–25 drawdown, slowest liquidity) also weakens the "best AMC" narrative.

### Gaps
- No verified AUM rankings for Aditya Birla, Axis, UTI, Mirae, PPFAS, Motilal or Quant for 2026.
- The Quant settlement amount and date are not confirmed, and it is unknown whether the case also covered the AMC entity.
- No source covered AMC-level investment philosophy or fund-manager churn statistics.

## Q5. Popular online claims: verdicts

### Takeaway
Most viral claims fail on the Sep–Oct 2026 data. Small caps are not delivering 30% (top 5Y CAGRs are ~20%). Quant is not "the best AMC". Motilal Midcap is not the current best mid-cap fund. Small caps are not at a discount.

### Cited Findings and Verdicts
- **"Small cap funds give 30% returns" — FALSE as a general or expected-return claim.**
  - Top 5Y CAGRs as of Sep 2026 are 19.3–20.6% — [Upstox](https://upstox.com/news/personal-finance/mutual-funds/5-top-small-cap-funds-by-cagr-rank-aum-in-september-2026-how-they-compare-on-volatility-measures/article-200191/)
  - 1Y returns for large funds range from −2.34% (HDFC SC) to ~13% (Quant SC) — [5paisa](https://www.5paisa.com/blog/hdfc-small-cap-fund-direct-growth-nav-24-sep-2026), [INDmoney](https://www.indmoney.com/blog/mutual-funds/bandhan-small-cap-fund-vs-nippon-invesco-comparison)
  - Over rolling periods the small-cap index averaged 14.7% and active small-cap funds 16.66% — [Value Research](https://www.valueresearchonline.com/learn/mutual-funds/mid-cap-vs-small-cap-funds-which-delivers-better-returns-long-term/)
  - Only tiny funds (TrustMF 33.87%, Bank of India 28.83%) show near-30% 1Y figures — [5paisa](https://www.5paisa.com/blog/top-small-cap-mutual-funds-in-2026-delivered-over-25-percent-in-1-year)
- **"Quant is the best AMC" — FALSE (PARTIAL only on 5Y small-cap returns).**
  - Quant SC 5Y is 20.09%, 4th in the Upstox ranking — [Upstox](https://upstox.com/news/personal-finance/mutual-funds/5-top-small-cap-funds-by-cagr-rank-aum-in-september-2026-how-they-compare-on-volatility-measures/article-200191/)
  - It was among the worst five in the Sep 2024–Feb 2025 crash (−19.91%) — [Value Research](https://www.valueresearchonline.com/stories/223196/5-strongest-weakest-small-cap-funds-market-crash/)
  - It needs 54 days to liquidate 50% — [Bajaj Broking](https://www.bajajbroking.in/share-market-news/midcap-and-smallcap-fund-stress-test-may-2026-data)
  - Its founder settled a SEBI front-running case — [BW](https://www.businessworld.in/article/sebi-committee-accepts-settlements-from-nippon-and-quant-mutual-fund-executives-in-separate-cases-566289)
  - Its regular-plan TER is 1.76% — [Scripbox](https://scripbox.com/mutual-fund/best-small-cap-mutual-funds/)
- **"Motilal Oswal Midcap is the best midcap fund" — PARTIAL (true for the 5Y record, false for the last 12–18 months).**
  - 5Y 22.40% and ahead of the benchmark over 3Y and 5Y, but 1Y only 0.63% (4 Sep 2026) and behind the benchmark — [INDmoney](https://www.indmoney.com/mutual-funds/motilal-oswal-midcap-direct-growth-3113)
  - 0.41% against 23.94% for the benchmark in the year to Feb 2026 — [Equitymaster](https://www.equitymaster.com/the-fundstrategist/detail.asp?date=03%2F11%2F2026&story=11&title=Why-Motilal-Oswal-Mid-cap-Fund-is-Falling)
  - On rolling returns it ranks #3, behind Mahindra Manulife and Kotak — [myinvestmentideas](https://myinvestmentideas.com/best-mid-cap-mutual-funds-to-invest-in-2026/)
- **"SIP in a correction always pays off" — PARTIAL / "always" is FALSE.**
  - As of 18 Sep 2026 the Nifty was still ~13.4% below its 26 Sep 2024 level — [multibagg.ai](https://www.multibagg.ai/market-pulse/articles/indian-market-correction-nifty-2026-cmuqvcsu4001s2smcfm2y8nf9). Large-cap SIPs started into the late-2024 correction therefore had not clearly "paid off" two years later.
  - SMID SIPs fared better because SMIDs rallied from April to August 2026 — [Business Standard](https://www.business-standard.com/amp/markets/news/nifty-midcap-150-index-tanks-7-in-september-87-stocks-show-loss-126092900328_1.html)
  - Whether it pays off depends on the recovery horizon. I could not compute SIP XIRRs because mfapi.in was blocked.
- **"Markets are at a discount" — PARTIAL (FALSE for small caps; plausible for large caps).**
  - The Nifty 50 is down ~10–13% in 2026 — [Upstox](https://upstox.com/news/market-news/stocks/why-are-midcaps-and-smallcaps-outperforming-nifty-50-in-2026-ytd-explained/article-200196/)
  - The Nifty Smallcap 250 P/E of 33.23 is ~17% *above* its 5Y median (Sep 2026) — [indexpe.in](https://indexpe.in/nifty-smallcap-250)
  - No verified large-cap P/E against its median was found.

### Inferences
- For a long-term growth investor in Oct 2026, the evidence favours:
  - a mid-cap core (index or diversified active fund) plus a smaller small-cap sleeve;
  - small-cap funds with moderate AUM and good liquidity (e.g. Bandhan, Invesco) over size-constrained giants;
  - expectations of ~13–18% long-run CAGR, not 30%.
- The 2026 divergence (large caps down, SMIDs at highs into August) means "buy the dip" rhetoric does not apply evenly. SMID valuations are not cheap.

### Gaps
- No independent SIP-XIRR backtests could be run (mfapi.in blocked).
- No verified Nifty 50 P/E against historical median for Sep/Oct 2026.
- Freefincal and Capitalmind analyses could not be accessed or found in search.
