import { expect } from 'chai';
import YouTubeManager from '../YouTubeManager.js';

describe('parseOutVideoUrl()', function () {
  it('should return a video url', function () {
    const youTubeManager = new YouTubeManager();
    var firstUrl = youTubeManager.parseOutVideoUrl("https://www.google.com\nhttps://www.yahoo.com")
    expect(firstUrl).to.be.equal('https://www.google.com');
  });
});

describe('parseChaptersFromDescription()', function () {
  it('should return chapters from full description - chapters style 1', function () {
    const youTubeManager = new YouTubeManager();
    var chapters = youTubeManager.parseChaptersFromDescription(`
    0:00 Bestie intro and Solana Breakpoint talk
    4:43 Covering the censored segment from last week, how to value crypto projects and general investing, what to take away from the podcast
    30:45 Rivian's $100B+ valuation, greatest CNBC hit of all time
    42:06 Inflation: reacting to the CPI number, problems with MMT, strategies to curb inflation
    1:01:34 Xi Jinping becomes China's "Supreme Leader"
    1:08:35 GE, Toshiba, and J&J break up into separate businesses: is this the end of the conglomerate? Insights from PayPal breaking off from eBay, what buybacks signal
    1:24:44 Besties wrap the show
    
    Follow the besties: 
    https://twitter.com/chamath
    https://linktr.ee/calacanis
    https://twitter.com/DavidSacks
    https://twitter.com/friedberg
    
    Follow the pod:
    https://twitter.com/theallinpod
    https://linktr.ee/allinpodcast
    
    Intro Music Credit:
    https://rb.gy/tppkzl
    https://twitter.com/yung_spielburg
    
    Intro Video Credit:
    https://twitter.com/TheZachEffect
    `)
    expect(chapters.length).to.equal(7);
    expect(chapters[0]["0:00"]).to.equal("Bestie intro and Solana Breakpoint talk");
  });
});

// describe('parseChaptersFromDescription()', function () {
//   it('should return chapters from full description - chapters style 2', function () {
//     const youTubeManager = new YouTubeManager();
//     var chapters = youTubeManager.parseChaptersFromDescription(`
//     Intro 0:00 
//     Why IPFS?  2:00
//     Explain the original web model and the limitation
//     * Content addressing instead of location addressing 
//     * decentralized content distributed among peers

//     Content 3:30
//     * Content is hashed as CID
//     * Content is immutable each update generates new CID 
//     * Content addressing 

//     Routing  4:30 
//     * Distributed Hash Table (DHTs) maps CID / Peer IP address 
//     * DHT server hosts content and DHT

//     Publishing Content 6:30
//     * New Content that you want to share on ipfs
//     *  hash the content creating new CID
//     * Update your local DHT CID / your ip address 
//     * DHT will be updated to all the content peer (NOT the CONTENT)
//     * People searching for your CID will be connected to you and only you.

//     Consuming Content 8:48
//     * ipfs client (dht client) want to consume Ipfs://cid/ 
//     * ipfs client consults its local DHT table to see where this CID is located, gets back a collection of IP addresses 
//     * client connects to some or all the peers found hosting that CID
//     * client downloads chunks of the content from each peer so it speeds up
//     * Once the client has the content it is now also updating its local DHT table that it now also hosts that CID (if it supports being a DHT server)
//     * New updated DHT is propogated across peer

//     IPFS Overview (Digrams) 11:30

//     Demo 13:45

//     More Information 18:30

//     Immutable Content
//     * if Content gets updated changes URI how do I inform the user?
//     * hash the public key of the user instead and share that 
//     Brand new Client/server
//     * I know nothing about the network (Bootstraping)
//     * you will be bootstrapped with a collection of ip addresses to start you up.
//     More
//     * IPFS gateway 
//     * IP Name server
//     * Solve content 
//     * Deleting Content( once other node hosts it no way to delete it from their network)
//     NAT traversal 

//     Resources
//     https://datatracker.ietf.org/meeting/interim-2020-dinrg-01/materials/slides-interim-2020-dinrg-01-sessa-an-overview-of-the-interplanetary-file-system-ipfs.pdf

//     https://www.youtube.com/watch?v=K4Usud4g4iY&feature=youtu.be&t=1008
//     https://twitter.com/hnasr/status/1353548949945163776?s=21

//     https://docs.ipfs.io/concepts

//     🎙️Listen to the Backend Engineering Podcast
//     https://husseinnasser.com/podcast 

//     🏭 Backend Engineering Videos
//     https://backend.husseinnasser.com

//     💾 Database Engineering Videos
//     https://www.youtube.com/playlist?list=PLQnljOFTspQXjD0HOzN7P2tgzu7scWpl2

//     🏰 Load Balancing and Proxies Videos
//     https://www.youtube.com/playlist?list=PLQnljOFTspQVMeBmWI2AhxULWEeo7AaMC

//     🏛️ Software Archtiecture Videos
//     https://www.youtube.com/playlist?list=PLQnljOFTspQXNP6mQchJVP3S-3oKGEuw9

//     📩 Messaging Systems
//     https://www.youtube.com/playlist?list=PLQnljOFTspQVcumYRWE2w9kVxxIXy_AMo

//     Become a Member 
//     https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg/join

//     Support me on PayPal
//     https://bit.ly/33ENps4

//     Join our Thriving Backend Community on Discord 
//     https://discord.com/invite/CsFbFce 

//     Stay Awesome,
//     Hussein
//     `)
//     expect(chapters.length).to.equal(11);
//     expect(chapters[0]["0:00"]).to.equal("Intro");
//   });
// });