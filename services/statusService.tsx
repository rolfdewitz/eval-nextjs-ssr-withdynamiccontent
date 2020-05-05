import React from 'react';

class StatusService extends React.Component<void> {

  private status: boolean;

  constructor() {
    super();
    this.status = false;
  }

  public getStatus(): boolean {
    let lastStatus = this.status;
    this.status = !this.status;
    return lastStatus;
  }
}

export default StatusService;