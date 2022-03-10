import React, { Component } from 'react';

class Event extends Component {

  render() {
    return (
        <section id="event">
            <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Evento</h2>
            </div>

            <div class="row content">
                <div class="col-lg-6">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <ul>
                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="https://r2.com.vc/" class="btn-learn-more">Ver Mais</a>
                </div>
            </div>

            </div>
        </section>

    );
  }
}

export default Event;


