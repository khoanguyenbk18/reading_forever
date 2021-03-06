import React from 'react';

const ModalFullScreen = () => {
  return (
    <div
      id='fsModal'
      className='modal animated bounceIn'
      tabIndex={-1}
      role='dialog'
      aria-labelledby='myModalLabel'
      aria-hidden='true'>
      {/* dialog */}
      <div className='modal-dialog'>
        {/* content */}
        <div className='modal-content'>
          {/* header */}
          <div className='modal-header'>
            <h1 id='myModalLabel' className='modal-title'>
              Modal title
            </h1>
          </div>
          {/* header */}
          {/* body */}
          <div className='modal-body'>
            <h2>1. Modal sub-title</h2>
            <p>
              Liquor ipsum dolor sit amet bearded lady, grog murphy's bourbon lancer. Kamikaze vodka
              gimlet; old rip van winkle, lemon drop martell salty dog tom collins smoky martini ben
              nevis man o'war. Strathmill grand marnier sea breeze b &amp; b mickey slim. Cactus
              jack aberlour seven and seven, beefeater early times beefeater kalimotxo royal arrival
              jack rose. Cutty sark scots whisky b &amp; b harper's finlandia agent orange pink lady
              three wise men gin fizz murphy's. Chartreuse french 75 brandy daisy widow's cork 7
              crown ketel one captain morgan fleischmann's, hayride, edradour godfather. Long island
              iced tea choking hazard black bison, greyhound harvey wallbanger, "gibbon kir royale
              salty dog tonic and tequila."
            </p>
            <h2>2. Modal sub-title</h2>
            <p>
              The last word drumguish irish flag, hurricane, brandy manhattan. Lemon drop, pulteney
              fleischmann's seven and seven irish flag pisco sour metaxas, hayride, bellini. French
              75 wolfram christian brothers, calvert painkiller, horse's neck old bushmill's gin
              pahit. Monte alban glendullan, edradour redline cherry herring anisette godmother,
              irish flag polish martini glen spey. Abhainn dearg bloody mary amaretto sour, ti punch
              black cossack port charlotte tequila slammer? Rum swizzle glen keith j &amp; b sake
              bomb harrogate nights 7 crown! Hairy virgin tomatin lord calvert godmother wolfschmitt
              brass monkey aberfeldy caribou lou. Macuá, french 75 three wise men.
            </p>
            <h2>3. Modal sub-title</h2>
            <p>
              Pisco sour daiquiri lejon bruichladdich mickey slim sea breeze wolfram kensington
              court special: pink lady white lady or delilah. Pisco sour glen spey, courvoisier j
              &amp; b metaxas glenlivet tormore chupacabra, sambuca lorraine knockdhu gin and tonic
              margarita schenley's." Bumbo glen ord the macallan balvenie lemon split presbyterian
              old rip van winkle paradise gin sling. Myers black bison metaxa caridan linkwood three
              wise men blue hawaii wine cooler?" Talisker moonwalk cosmopolitan wolfram zurracapote
              glen garioch patron saketini brandy alexander, singapore sling polmos krakow golden
              dream. Glenglassaugh usher's wolfram mojito ramos gin fizz; cactus jack. Mai-tai leite
              de onça bengal; crown royal absolut allt-á-bhainne jungle juice bacardi benrinnes,
              bladnoch. Cointreau four horsemen aultmore, "the amarosa cocktail vodka gimlet ardbeg
              southern comfort salmiakki koskenkorva."
            </p>
          </div>
          {/* body */}
          {/* footer */}
          <div className='modal-footer'>
            <button className='btn btn-secondary' data-dismiss='modal'>
              close
            </button>
            <button className='btn btn-default'>Default</button>
            <button className='btn btn-primary'>Primary</button>
          </div>
          {/* footer */}
        </div>
        {/* content */}
      </div>
      {/* dialog */}
    </div>
  );
};

export default ModalFullScreen;
