import "./App.css";
import icon1 from "./images/icons/header_logo_icon1.png";
import icon2 from "./images/icons/header_logo_icon2.png";
import heroUserImg from "./images/users-image/hero-user_image.png";
import ArticlesCard1Img from "./images/cards-image/Articles_card1-image.png";
import ArticlesCard2Img from "./images/cards-image/Articles_card2-image.png";
import ArticlesCard3Img from "./images/cards-image/Articles_card3-image.png";
import ArticlesCard4Img from "./images/cards-image/Articles_card4-image.png";
import ArticlesCard5Img from "./images/cards-image/Articles_card5-image.png";
import ArticlesCard6Img from "./images/cards-image/Articles_card6-image.png";
import keyboard from "./images/keyboard.png";
import DownIcon from "./images/icons/down-icon.png";
import dottedIcon from "./images/icons/dotted-icon.png";
import instagram from "./images/icons/instagram.png";
import twitter from "./images/icons/twitter.png";
import facebook from "./images/icons/facebook.png";
import telegram from "./images/icons/telegram.png";

function App() {
    return (
        <div>
            <div className="container">
                <header>
                    <h2>Fabrx</h2>
                    <div className="Logo">
                        <div className="right">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/bbd6/c20b/4a4f1c170688ce177907285608cd7011?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPpmmaVygGZFeWCk29OR5UE4Tq1~ZyKZ72y8zuc3sUzezrLVokeV9RJzu2slCNK08HXIgChPo6JHCG6xF-KnA~-hzJIBqLO--Go9kPjezNTVqsd6ukiNkHIKl0cjnmOkpM01IYyJlPUSUpZFxRFbu9MBVlTrLNGfsovWZql2MkRBGxs7TRLr1p7aw7iebIA9LJPBbt6wyqgce5e60JoLkV-3JLyR0Dsi6ubhUbLKxdlClagjrWZLgzh-rkkexHxe2H4hP77SABHqueu6dKB2gcPj--iimbkMyvc58y3ijlevHCNIG7PXvOEuUFJFvS9Z9dqUnh~wW~OnFE7AYk~qJA__"
                                alt=""
                            />
                            <p>Bruce Lee</p>
                        </div>
                        <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                        </div>
                    </div>
                </header>
            </div>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__content">
                            <h2>5 mind blowing facts about the iPhone 14</h2>
                            <div className="hero-author">
                                <img src={heroUserImg} alt="" />
                                <p>Farok Rastegar . 1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="Articles">
                        <h2>Featured articles</h2>
                        <div className="Articles__cards">
                            <div className="Articles__card">
                                <img src={ArticlesCard1Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/457f/de58/d074873515a79f1ea6c09e962b6be8fa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eDS~lv3G1vXFr2G6uvrtzp7wharfCcI92EiWTdLtofbpufpFpLk1jHa7zc-daBvW8TcqRhdyctbZdVlduke8ESEqBZQzZ3ibHEanRkAJikUr1K5Csx~mpDafuSokDIjMuhky0g0yCr9fJwoHUFGlsQVa80T2NImLiW653EFWMTdAhLt2TYScWiPEEGuOrPZubIw6rlRriCDO2YSjZL455eLRK8JKmGyMXk2IRsUxGExprawJG-WBHDDcY68k1T0PlanmvUTEleftTu0GuvoCMna0CqX3CzbF8WmNUcSW8-KvcuJ8Xaet-aj0tPl4ciUMGdEOZr10CJJEmDqnPGzvVw__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                            <div className="Articles__card">
                                <img src={ArticlesCard2Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                            <div className="Articles__card">
                                <img src={ArticlesCard3Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/4d87/0e1d/09bfc3594875aa17a6a55ebde1b7c881?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CnQf4cfdGdkY1-GbPKQa1H3BjaDzHRYoInrCq95xWKj-i7rly9VS-qSnQlIFcLXeaFA8TD2PJunmPjrqnHf7xbyLZoEPlOPy40dyGiPdUkBg99jLjQIZE46A5pxXP496XRSDfxiy6~y~Mm5PahMAGrzTxDHIrypHx2ZekeNGIjP38eBX78jkQjGxV2FQsnKJwhJpPPe8asgx~AZ18rfJTSliWUFIgoMPNHYmV1-mu1c9XfPOD1Bxi9a16e9tHogEbSH0SIYb1APHMXv6f5hozb8igx9JVIFrt9ETm3lTxqsVAGJhdAdISUAcmbvO4k2flIPUhloAnHsvWs-tTHjbBA__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                            <div className="Articles__card">
                                <img src={ArticlesCard4Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/be65/0a70/d530c41653a6a055ef660403b434505f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjNagJxwh~aqtDNQrRl~R9~a9AvL5Nf7yiMRRAr6VgzsMqYxm8FuR20L7eQfk4vp7k11IGIY6ji6cDbbpjE8Gn7J3cMhbzJpFKot~elJLPtF6fK3SiI5g3ximVs6QwZVYnanTklYtuTxD94gY4oW81wirgO~kH23tpXV5cMuO~J1xAoDUUrPKSC2RHnFpcXPEmsbZu0sege~11ReDP4tOC-b4rov2ZvSCMmwPU7fChbL1njj13ZpQx3Qh720HHLFo-WwQFMvs84C8H5ucZCTK-azjmioCkrx6MpBTV~QgcT185ro0iLrecfgUCOX9ofocja7~eh-HGiLqprYBC-aFg__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                            <div className="Articles__card">
                                <img src={ArticlesCard5Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/0cef/b391/ad29556d2e1479ae2d9479f69b6a5ee5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfWG4sKvU~-GoVOPyqTxplKZ3Ts9hOVRjKCAyjS66XbDAMxZaQ5GMeygihJRSue~lX9xOoHYEnxKNB7dO5ftfm2Sw4KJnOvErTJa9J9qk7fpJvbGZnG8hU1apopwV7ZIgoCfPoZY35ersSa4G0bGkwIBNmlkKrVhPglu2LmUIkiyxgBK6G3uOZ0brVHkjGAroNf0stz78s7gjgUfw7WPcjNUb4MTQP8C6F1PV2vBB7uGQCH~U4i~gC4oPfJfLnkUeojczNAdVlWY2kTQUKyoMpcZ0pprHhgOFqgCN24X5x5pV2lewqE2gdY9sr~NYRj495MrWJ2VnRQSjcAwVOsqAg__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                            <div className="Articles__card">
                                <img src={ArticlesCard6Img} alt="" />
                                <h3>10 beaches you must visit</h3>
                                <div className="Articles-author">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/4945/b149/57d5fe061c05996d6b3bd06af725ab8b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsZhtnE6ncFYtise2KHbWBDnyqzwsNLlbciB9P4kg6jcXNqZjD~0X5wmRbqsk6m0anZmnvOKmzirc7MHe4ZhRXRVWcaO0Waf3zvVu7Ubu05968aeIlw9e-F~7aYknclLXvenvKuja8YNZ9HCRjzpF702iV3LSKErf4~AqD1k6~HhD62Tcx8f6EHLpZt4DSgmM~XWtNw4Q3be9HwfV17-IyM59MjqdWYx1rvQPZOIsASShlgf3Y4sWEMKSOGqn6~OQ84WX8ULhwE4rt4UuC5TOh9kS99EP4PTqdaAv-PDPyaO0liPsi2uv1YRIP5wrNBr2xVGHCVZ7Wa-6GG2ETpKgQ__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the…
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <section className="Teach">
                        <div className="Teach__content">
                            <div className="Teach__content-card">
                                <button>Featured</button>
                                <h2>Beached to take you somewhere else</h2>
                                <div>
                                    <img
                                        className="Teach__content-author"
                                        src="https://s3-alpha-sig.figma.com/img/dd14/f896/0a57d98e91a87fd421a1989da78da929?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvw1v58CKVtcThqfNDKI8JhYs7GnTsX1qHezQtshZEypAwZ~ynOnKIP28odZN1sTdh0akii~a5B0L4u-4u3JqYgL9YVYSnqEVtr~5kbFOEUzIFCXZ5u2hcCFuPz9PnEn4oEaTukYz5AfZLTkG2oHr5eimnjKgv6CIrHniR57yLYEZ-E8x22dm9QVcD02vyVv7ToSQUiKUeqAWCpadutbAoOFyJZzxDbvmwe5oCvellWKdJxals~zLd-Za6R9dUkVCt3HBdFm~nbPuNfRfWZaVgXoHS4otRWKx-xc~f1hnqu9Z6qRmr3mZKHhwweKaBqM83HcbyssJegQMaNPpO7kbw__"
                                        alt=""
                                    />
                                    <p>Farok Rastegar . 1 hour ago</p>
                                </div>
                            </div>
                            <img
                                className="Teach__keyboard-image"
                                src={keyboard}
                                alt=""
                            />
                        </div>
                    </section>
                </div>
                <div className="container">
                    <section className="Articles2">
                        <h2>Featured articles</h2>
                        <div className="Articles2__cards">
                            <div className="Articles2__card">
                                <img
                                    className="Articles2__card-image"
                                    src="https://s3-alpha-sig.figma.com/img/6556/a06d/cd44c04d619c516959450e4c98439967?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I4Qj27TuXWP-IPmHwaW8Z72ogsxuImr4waqHDlam3ATcEeEwUSId5LatehOJgom8c5BnPnXeqSn2ywwRtNf-nVO00xEWNDTM9x6Wnq1C-QVlWPcpRXEqwl2LM-QYHGiXwD7By~~D0Azc7ucdotKFEGwZXUyoGPqo-VUVLTDZvd2YR4fT663d0ix9osb4AgVZ8ksGh3FL-G4y8jIcQ6exWgkaGnCwqoQlpq-KkULTfq~ygrpNM-7xxAQ9Ci9TthPi-ROi4xMkUqx4ADFXKssrtrb2cIWXbS9lwYT3TyxeZ6LyeJiJbOMuADnGcK4fV1RqtSI192AYFdjHxUR3F3Vscw__"
                                    alt=""
                                />
                                <div className="Articles2__card-content">
                                    <h3>Pathway to the Mediterranean</h3>
                                    <div className="Articles2__card-author">
                                        <img
                                            src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                            alt=""
                                        />
                                        <p>Farok Rastegar . 1 hour ago</p>
                                    </div>
                                    <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment, so
                                        blinded by desire, that they cannot
                                        foresee the pain a…
                                    </p>
                                </div>
                            </div>
                            <div className="Articles2__card">
                                <img
                                    className="Articles2__card-image"
                                    src="https://s3-alpha-sig.figma.com/img/545b/f1df/3ac30caba32c09c321683be51afca703?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7NG-g-jJZBivDJ1fTEcXVLv85B7-1X476zRs1Arw9uvfAuzEu4ukq5pKX2Y7KjgSF6xPztFW5U0o8bXbIU8xu5g1pDI0VMiFQJIMI8npO-K2e-KuaeQmIYg8~gNjRtfwtJ0HopW44KS3AfFuxoFkBbwqRqTY2sv2pcpA7snf79N3TKOEJEuknY~fBC-F8pgP~42VGfxjkw8pEGfhpHF3T9VF3CoJ6F9uDbqXjBxyiqxaKq3w5u5nKfXJq4pi~WMte3Hubq8l07D04fflYHGx7VTt6l16aFzFjIBUVI3dOnmd~VclJUxMc067YkCdhiVjGXdLJWjS8AKOdm29KBYXw__"
                                    alt=""
                                />
                                <div className="Articles2__card-content">
                                    <h3>
                                        My awesome safari in Lahbab Desert,
                                        United Arab Emirates
                                    </h3>
                                    <div className="Articles2__card-author">
                                        <img
                                            className="Articles2__card-author-img"
                                            src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                            alt=""
                                        />
                                        <p>Farok Rastegar . 1 hour ago</p>
                                    </div>
                                    <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment, so
                                        blinded by desire, that they cannot
                                        foresee the pain a…
                                    </p>
                                </div>
                            </div>
                            <div className="Articles2__card">
                                <img
                                    className="Articles2__card-image"
                                    src="https://s3-alpha-sig.figma.com/img/088d/b9f0/1b81e4f039fcec985b263fcef88bfb4d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnFTdN1Rk8eF4KTvomBK-DfEZlWBmjRpusoipFrWeTFNq3aSbvVXq1X66arVNT6BvYXfBEX1pduF-zT0hDvtIRokTsIWiGBdukvLPkHDt5cLHxg2Bjz-C1RzGiNLoWTbI9qte8E31Lw~YO0KdBQdwncRPjjZ5htnIwnxxS8kOohym5MXv3PKaNGE2o6LZQj8QqXI6KsVeDimVnw47h6qCWnChLBub4atEDUlYi8dLjwiGzPKsWPg8NlSIHHTIBQUR9IhqNpdNWTQxDeenKAgUENq9xUKm-ipcth92kOtIGVyb7EYF4aPM9ygi4pnaFr8mVwcUI1ABCqDpy5~V4UFjQ__"
                                    alt=""
                                />
                                <div className="Articles2__card-content">
                                    <h3>10 amazing things to do in Cuba</h3>
                                    <div className="Articles2__card-author">
                                        <img
                                            className="Articles2__card-author-img"
                                            src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                            alt=""
                                        />
                                        <p>Farok Rastegar . 1 hour ago</p>
                                    </div>
                                    <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment, so
                                        blinded by desire, that they cannot
                                        foresee the pain a…
                                    </p>
                                </div>
                            </div>
                            <div className="Articles2__card">
                                <img
                                    className="Articles2__card-image"
                                    src="https://s3-alpha-sig.figma.com/img/b1c2/65b2/0ed2338fee586c36c3cf1e8ec60a6360?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RN5UgbzUBOLY26B-vGhcFnRkIB0tAltEQ56wXUPZdGtBJWSpPZ0Alg9XVvAomtptpO5Y1SUrYf1IInvleWtbBv8K1Cj8IvRDHOGpAuiaQdNTKtH8SFBJFnyMVrnloQ-g6bV~1aF6jVxS6DdtoPzCYzCrk792ELboT9A5NGMvoqtFPL6177vKmMJN5ke7kgVdR0mlfB827nIi9Z12eATBITAQV6vjoOFlS7EuyNbG3bindYSDuuxnHxYSIEI37VWpHiCwKCsjBJKAm3bNebjUiKZu4lr5HVzc0CGwAUn~QKEVgczmPTWTYdXO8SWbLWVYrWiEDTeg6r2rQO1XCpXY9Q__"
                                    alt=""
                                />
                                <div className="Articles2__card-content">
                                    <h3>
                                        The best street food in the world.
                                        Ranked!
                                    </h3>
                                    <div className="Articles2__card-author">
                                        <img
                                            className="Articles2__card-author-img"
                                            src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                            alt=""
                                        />
                                        <p>Farok Rastegar . 1 hour ago</p>
                                    </div>
                                    <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment, so
                                        blinded by desire, that they cannot
                                        foresee the pain a…
                                    </p>
                                </div>
                            </div>
                            <div className="Articles2__card">
                                <img
                                    className="Articles2__card-image"
                                    src="https://s3-alpha-sig.figma.com/img/c8db/d447/221c0a57cd8f75f2cbd6073c31d9f384?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEgWth8nIQXE6tFfrYM-K6GLTwi-SgTCzjlFZCaQOkD2w8yLa8cK7QeXi03NynURkYeVDPQa8jjwWrCv9AG-ZCViP-oyQesoDBv2D1OD6CWFzVsqHYcNuFABFrn4oevV06x7jmGwqUGXoFIohZOsXxIzeWOhXd5yNY6yGeyP7Spp4FeWi5BBkaTRqKNZEiG~oMIvbgUHOocJCiT2~3SYMal720jIixrw89LkLnJRTzdaHrlnl757ErBbkcMEr0ieeI-GvJYsFU4twNA55IvKRZDg0U~u3pQBrcw53d5ke4I7~4N4ZlNAjdpt5WuLbC9u8VftsuEum~gEM2mLfpTXYg__"
                                    alt=""
                                />
                                <div className="Articles2__card-content">
                                    <h3>Travel Packing guide for beginners</h3>
                                    <div className="Articles2__card-author">
                                        <img
                                            className="Articles2__card-author-img"
                                            src="https://s3-alpha-sig.figma.com/img/c938/bfeb/e17ec956424d5e18e5e6a81482c067ea?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFWor0LwMmjiBcUip6iLcRNVGRuUAS~opjw3ifO7TCAb8WqFNZ87ZYWqolIYiw20dZ3FsH2TrJ9-E0KLI4od7yQZr41BrvT1EU~xgrL8zWtUpJeg0bD376pAprzrHlKlNoOth1ENnRc9-R1jaWUzPy6Z2sYJPrWFwT2ZXTkrBloHjYdWpxQQ44eNWvGM6ZL49pLzxs2Tu3vdbdH64BDNby1JGUkHS6ptWx6JTlyzsDmmkd89ZZc~aQZcernI3E5dDPUxvMCgB46oMcZ2ijDbVhpxvoVnyJArt4FRuAdk7TP7ly-eFLw64llOGZXW7PTa9pL~IiFKo2PuBavbX1fM1w__"
                                            alt=""
                                        />
                                        <p>Farok Rastegar . 1 hour ago</p>
                                    </div>
                                    <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment, so
                                        blinded by desire, that they cannot
                                        foresee the pain a…
                                    </p>
                                </div>
                            </div>
                            <button>Load more</button>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <section className="blue">
                        <div className="discount">
                            <div className="discount__content">
                                <h2>
                                    Incredible deals, <br /> right to your
                                    inbox!
                                </h2>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="placeholder"
                                    />
                                    <button>
                                        <img src={DownIcon} alt="" />
                                    </button>
                                </form>
                                <p>
                                    By joining you agree to our Terms and
                                    Conditions
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-content-links">
                            <div className="footer-content-links-link">
                                <h4>First Column</h4>
                                <ul>
                                    <a href="#">
                                        <li>Link One</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Two</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Three</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Four</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footer-content-links-link">
                                <h4>Second Column</h4>
                                <ul>
                                    <a href="#">
                                        <li>Link One</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Two</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Three</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Four</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footer-content-links-link">
                                <h4>Third Column</h4>
                                <ul>
                                    <a href="#">
                                        <li>Link One</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Two</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Three</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Four</li>
                                    </a>
                                </ul>
                            </div>
                            <div className="footer-content-links-link">
                                <h4>Fourth Column</h4>
                                <ul>
                                    <a href="#">
                                        <li>Link One</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Two</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Three</li>
                                    </a>
                                    <a href="#">
                                        <li>Link Four</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-form">
                            <h3>Never miss an update</h3>
                            <form>
                                <input type="text" placeholder="placeholder" />
                                <button>
                                    <img src={DownIcon} alt="" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="nmadur">
                <div className="container">
                    <div className="nmadurri-divi">
                        <img src={dottedIcon} alt="" />
                        <p>© 2019 Fabrx </p>
                        <div className="nmadurri-iconlari">
                            <a href="https://www.facebook.com">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://twitter.com">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://telegram.com">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
