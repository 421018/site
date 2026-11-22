/** Widgets of the documentation's pages (names in src/widgets/names.ts). */
import FeeCalc from '../tools/FeeCalc.astro';
import UnitConverter from '../tools/UnitConverter.astro';
import ConsensusSim from './widgets/ConsensusSim.astro';
import VoteSim from './widgets/VoteSim.astro';
import IbcSim from './widgets/IbcSim.astro';
import NetworkSwitch from '../network/components/NetworkSwitch.astro';
import NetworkParams from '../network/components/NetworkParams.astro';
import ProviderDirectory from '../network/components/ProviderDirectory.astro';
import AddNetwork from '../network/components/AddNetwork.astro';
import type { docsWidgetNames } from '../widgets/names';

export const docsWidgets: Record<(typeof docsWidgetNames)[number], (props: Record<string, never>) => unknown> = {
  'fee-calc': FeeCalc,
  'unit-converter': UnitConverter,
  'consensus-sim': ConsensusSim,
  'vote-sim': VoteSim,
  'ibc-sim': IbcSim,
  'network-switch': NetworkSwitch,
  'network-params': NetworkParams,
  'provider-directory': ProviderDirectory,
  'add-network': AddNetwork,
};
