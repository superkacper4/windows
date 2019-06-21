import React, { useContext } from 'react';
import Icon from '../../../Desktop/Icon';

// import pc from '../../../../../../assets/img/komputer.png'
// import bin from '../../../../../../assets/img/kosz.png'
// import paint from '../../../../../../assets/img/paint.png'
// import IE from '../../../../../../assets/img/IE.png'
import AppContext from '../../../../context';

const DesktopFCon = () => {
  const context = useContext(AppContext);
  const data = [...context.state.Data];
  data.splice(0, 2);
  const Icons = data.map((Icone, i) => (
    <Icon
      content={Icone.content}
      desk={!Icone.desk}
      folder={Icone.desk}
      src={Icone.src}
      key={Icone.key}
      functions={Icone.functions}
      openProgramFn={context.openProgramFn}
      id={Icone.key}
      active={Icone.active}
      initialPos={{ x: 62 * i, y: 5 }}
    />
  ));
  return <>{Icons}</>;
};

export default DesktopFCon;
