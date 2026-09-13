/**
 * Time calculation helpers for BUSNOW SG
 */

/**
 * Converts an ISO EstimatedArrival timestamp into a relative string:
 * - "Arriving" if due now or less than 1 minute (no negative values)
 * - "X min" otherwise
 */
export function formatArrival(arrivalIso: string, referenceTimeMs: number = Date.now()): string {
  const arrivalDate = new Date(arrivalIso);
  const arrivalTime = arrivalDate.getTime();

  if (isNaN(arrivalTime)) {
    return 'Arriving';
  }

  const diffMs = arrivalTime - referenceTimeMs;
  const minutes = Math.floor(diffMs / 60000);

  if (minutes <= 0) {
    return 'Arriving';
  }

  return `${minutes} min`;
}

/**
 * Formats an ISO timestamp for display as fetched time.
 */
export function formatFetchedTime(isoString: string): string {
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return isoString;
    }
    return date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  } catch {
    return isoString;
  }
}
