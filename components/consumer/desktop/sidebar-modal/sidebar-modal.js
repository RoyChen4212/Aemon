import React from 'react';

import './style.css';

class SidebarModal extends React.PureComponent {
  onBackClick = () => {
    if (this.props.onBackClick) return this.props.onBackClick();
  }

  renderMainContent() {
    return this._renderColumn('pbg-sidebar-modal-main-content', this.props.mainContent);
  }

  renderSidebarContent() {
    return this._renderColumn('pbg-sidebar-modal-sidebar-content', this.props.sidebarContent);
  }

  _renderColumn(name, content) {
    return (
      <div className={`${name} pbg-sidebar-modal-col`}>
        {content}
      </div>
    );
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-modal pbg-sidebar-modal">
        <div className="pbg-modal-dialog">
          { this.renderMainContent() }
          { this.renderSidebarContent() }
          <button type="button" className="pbg-modal-close-button" onClick={this.onBackClick}/>
        </div>
        <div className="pbg-modal-overlay" onClick={this.onBackClick} />
      </div>
    );
  }
};

export default SidebarModal;
