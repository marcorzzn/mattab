import Gun from 'gun';

/**
 * mattab P2P Network Layer
 * 
 * Initializes a Gun.js graph database instance.
 * Gun operates P2P (via WebRTC) with an optional relay.
 * Data is stored locally in IndexedDB and synced with peers.
 * 
 * In production, we can point to our own relay (Super-Node)
 * or use Gun's community relays.
 */
const gun = Gun({
    peers: ['https://gun-manhattan.herokuapp.com/gun'], // Free community relay (fallback)
    localStorage: false, // Use IndexedDB (radisk) instead — lighter on mobile
});

export default gun;
