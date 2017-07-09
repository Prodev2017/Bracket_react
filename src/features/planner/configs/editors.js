import ClauseEditor from '../components/ClauseEditor';
import ParticipantEditor from '../components/ParticipantEditor';
import entities from './enitites';


const editorsComponentsMap = {
	[entities.ENTITY_TRADE]: null,
	[entities.ENTITY_CLAUSE]: ClauseEditor,
	[entities.ENTITY_PARTICIPANT]: ParticipantEditor,
};


function getEditorsComponentsMap () {
	return editorsComponentsMap;
}

export default {
	getEditorsComponentsMap,
};
