/**
 * API is using an encoded playerId for playerIds with a #
 *
 * @param playerId
 */
export function encodePlayerId(playerId: string): string {
    return playerId.replace("#", "%23");
}