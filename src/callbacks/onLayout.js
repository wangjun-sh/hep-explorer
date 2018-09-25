import addRRatioSpan from './onLayout/addRRatioSpan';
import { initQuadrants } from './onLayout/initQuadrants';
import { initRugs } from './onLayout/initRugs';
import { initVisitPath } from './onLayout/initVisitPath';
import { initParticipantDetails } from './onLayout/initParticipantDetails';
import { initResetButton } from './onLayout/initResetButton';
import { initDisplayControl } from './onLayout/initDisplayControl';
import { layoutPanels } from './onLayout/layoutPanels';
import { initTitle } from './onLayout/initTitle';
import { init as initMessages } from './onLayout/messages/init';
import { initWarning } from './onLayout/initWarning';
import { initControlLabels } from './onLayout/initControlLabels';

export default function onLayout() {
    layoutPanels.call(this);
    initMessages.call(this);
    initWarning.call(this);
    initTitle.call(this);
    addRRatioSpan.call(this);
    initQuadrants.call(this);
    initRugs.call(this);
    initVisitPath.call(this);
    initParticipantDetails.call(this);
    initResetButton.call(this);
    initDisplayControl.call(this);
    initControlLabels.call(this);
}
