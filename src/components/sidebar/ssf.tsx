import { SidePanelResponsive } from '@alfalab/core-components/side-panel/responsive';
import { SidePanelDesktop } from '@alfalab/core-components/side-panel/desktop';
import { Typography } from '@alfalab/core-components/typography';
import React from "react";
import {Button} from "@alfalab/core-components/button";
import {Radio} from "@alfalab/core-components/radio";
import {RadioGroup} from "@alfalab/core-components/radio-group";

// export const Sidebar = () => {
//     const [open, setOpen] = React.useState(false);
//     const handleModalOpen = () => setOpen(!open);
//     const [state, setState] = React.useState({
//         fixedСontent: "yes",
//         header: "header",
//         navigation: "closer",
//         footerContent: "yes",
//         placement: "right",
//         scrollbar: "native",
//     });
//     const handleStateChange = (key: any, _: any, payload: { value: any; }) => {
//         setState((state) =>
//             Object.assign(Object.assign({}, state), { [key]: payload.value })
//         );
//     };
//     const Text = () => (
//         <p style={{ margin: "15px 0 16px" }}>
//             Сейчас много говорят об отказах банков в проведении операций, блокировках
//             интернет-банка. Это связано с тем, что Центральный банк РФ обязывает банки
//             выявлять операции своих клиентов, потенциально нарушающие требования
//             Федерального закона «О противодействии легализации (отмыванию) доходов,
//             полученных преступным путем, и финансированию терроризма» — 115-ФЗ
//         </p>
//     );
//     return (
//         <React.Fragment>
//             <Button type="button" size="xs" onClick={handleModalOpen}>
//                 Открыть сайд-панель
//             </Button>
//             <SidePanelDesktop
//                 open={open}
//                 onClose={handleModalOpen}
//                 size="s"
//                 placement= "right"
//                 nativeScrollbar={state.scrollbar === "native"}
//             >
//                 <SidePanelDesktop.Header
//                     hasCloser={state.navigation === "closer"}
//                     sticky={state.fixedСontent === "yes"}
//                 />
//                 <SidePanelDesktop.Content>
//                     <div style={{ position: "relative" }}>
//                         {state.header === "content" && (
//                             <Typography.Title view="small" tag="div">
//                                 Почему банк проверяет мои операции?
//                             </Typography.Title>
//                         )}
//                         <Text />
//                         <Text />
//                         <Text />
//                         <Text />
//                         <Text />
//                     </div>
//                 </SidePanelDesktop.Content>
//                 <SidePanelDesktop.Footer sticky={state.fixedСontent === "yes"}>
//                     {state.footerContent === "yes" && (
//                         <Button view="primary" size="s" onClick={handleModalOpen}>
//                             Понятно
//                         </Button>
//                     )}
//                 </SidePanelDesktop.Footer>
//             </SidePanelDesktop>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Размещение"
//                     direction="vertical"
//                     name="placement"
//                     onChange={handleStateChange.bind(null, "placement")}
//                     value={state.placement}
//                 >
//                     <Radio label="Слева" value="left" />
//                     <Radio label="Справа" value="right" />
//                 </RadioGroup>
//             </div>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Скроллбар"
//                     direction="vertical"
//                     name="scrollbar"
//                     onChange={handleStateChange.bind(null, "scrollbar")}
//                     value={state.scrollbar}
//                 >
//                     <Radio label="Нативный" value="native" />
//                     <Radio label="Кастомный" value="custom" />
//                 </RadioGroup>
//             </div>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Футер и хедер"
//                     direction="vertical"
//                     name="radioGroupFirst"
//                     onChange={handleStateChange.bind(null, "fixedСontent")}
//                     value={state.fixedСontent}
//                 >
//                     <Radio label="Фиксированные" value="yes" />
//                     <Radio label="Нефиксированные" value="no" />
//                 </RadioGroup>
//                 <Typography.Text
//                     style={{ marginTop: "15px" }}
//                     view="primary-small"
//                     color="secondary"
//                     tag="p"
//                 >
//                     Футер и хедер без контента не могут быть закреплёнными.
//                 </Typography.Text>
//             </div>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Заголовок"
//                     direction="vertical"
//                     name="radioGroupSecond"
//                     onChange={handleStateChange.bind(null, "header")}
//                     value={state.header}
//                 >
//                     <Radio label="В шапке" value="header" />
//                     <Radio label="В контентной части" value="content" />
//                 </RadioGroup>
//             </div>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Навигация"
//                     direction="vertical"
//                     name="radioGroupThird"
//                     onChange={handleStateChange.bind(null, "navigation")}
//                     value={state.navigation}
//                 >
//                     <Radio label="Закрыть" value="closer" />
//                     <Radio label="Без навигации" value="no" />
//                 </RadioGroup>
//             </div>
//
//             <div style={{ margin: "40px 0" }}>
//                 <RadioGroup
//                     label="Контент футера"
//                     direction="vertical"
//                     name="radioGroupFifth"
//                     onChange={handleStateChange.bind(null, "footerContent")}
//                     value={state.footerContent}
//                 >
//                     <Radio label="Кнопка" value="yes" />
//                     <Radio label="Нет контента" value="no" />
//                 </RadioGroup>
//
//                 <Typography.Text
//                     style={{ marginTop: "15px" }}
//                     view="primary-small"
//                     color="secondary"
//                     tag="p"
//                 >
//                     Футер без контента не может быть фиксированным
//                 </Typography.Text>
//             </div>
//         </React.Fragment>
//     );
// };

